var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var kubeconfig_exports = {};
__export(kubeconfig_exports, {
  getKubeContext: () => getKubeContext,
  getKubeContextFromHomeConfig: () => getKubeContextFromHomeConfig,
  getKubeContextFromServiceAccount: () => getKubeContextFromServiceAccount
});
module.exports = __toCommonJS(kubeconfig_exports);
var import_yaml = __toESM(require("yaml"));
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
async function getKubeContext() {
  if (await fileExists(getHomeConfigPath())) {
    return getKubeContextFromHomeConfig();
  }
  return getKubeContextFromServiceAccount();
}
function getHomeConfigPath() {
  return (0, import_path.join)((0, import_os.homedir)(), ".kube", "config");
}
async function fileExists(path) {
  return (0, import_promises.stat)(path).then((s) => s.isFile()).catch(() => false);
}
async function getKubeContextFromHomeConfig() {
  const kubeconfigRaw = await (0, import_promises.readFile)(getHomeConfigPath(), "utf-8");
  const kubeconfig = import_yaml.default.parse(kubeconfigRaw);
  const currentContextName = kubeconfig["current-context"];
  if (typeof currentContextName !== "string") {
    throw new Error(`Expected current-context to be string in ${getHomeConfigPath()}`);
  }
  if (!Array.isArray(kubeconfig.contexts) || kubeconfig.contexts.length < 1) {
    throw new Error(`Unable to find any contexts in ${getHomeConfigPath()}`);
  }
  const context = kubeconfig.contexts.find((context2) => context2.name === currentContextName);
  if (context === void 0) {
    throw new Error(`Unable to find context named ${currentContextName} in ${getHomeConfigPath()}`);
  }
  if (typeof context.context?.cluster !== "string") {
    throw new Error(`No cluster name for context ${currentContextName} in ${getHomeConfigPath()}`);
  }
  const cluster = kubeconfig.clusters.find((cluster2) => cluster2.name === context.context.cluster);
  if (cluster === void 0) {
    throw new Error(`No cluster named ${context.context.cluster} in ${getHomeConfigPath()}`);
  }
  if (typeof context.context?.user !== "string") {
    throw new Error(`No user name for context ${currentContextName} in ${getHomeConfigPath()}`);
  }
  const user = kubeconfig.users.find((user2) => user2.name === context.context.user);
  if (user === void 0) {
    throw new Error(`No user named ${context.context.user} in ${getHomeConfigPath()}`);
  }
  let ca;
  if (typeof cluster.cluster["certificate-authority-data"] === "string") {
    ca = Buffer.from(cluster.cluster["certificate-authority-data"], "base64").toString("utf-8");
  }
  return {
    cluster: {
      name: context.context.cluster,
      server: cluster.cluster.server,
      ca
    },
    user: {
      name: context.context.user,
      token: user.user.token
    },
    namespace: context.context.namespace
  };
}
async function getKubeContextFromServiceAccount() {
  const ca = await (0, import_promises.readFile)("/var/run/secrets/kubernetes.io/serviceaccount/ca.crt", "utf-8");
  const namespace = await (0, import_promises.readFile)("/var/run/secrets/kubernetes.io/serviceaccount/namespace", "utf-8");
  const token = await (0, import_promises.readFile)("/var/run/secrets/kubernetes.io/serviceaccount/token", "utf-8");
  return {
    cluster: {
      server: "https://kubernetes.default",
      ca
    },
    user: {
      token
    },
    namespace
  };
}
