import yaml from "yaml";
import { readFile, stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
export async function getKubeContext() {
  if (await fileExists(getHomeConfigPath())) {
    return getKubeContextFromHomeConfig();
  }
  return getKubeContextFromServiceAccount();
}
function getHomeConfigPath() {
  return join(homedir(), ".kube", "config");
}
async function fileExists(path) {
  return stat(path).then((s) => s.isFile()).catch(() => false);
}
export async function getKubeContextFromHomeConfig() {
  const kubeconfigRaw = await readFile(getHomeConfigPath(), "utf-8");
  const kubeconfig = yaml.parse(kubeconfigRaw);
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
export async function getKubeContextFromServiceAccount() {
  const ca = await readFile("/var/run/secrets/kubernetes.io/serviceaccount/ca.crt", "utf-8");
  const namespace = await readFile("/var/run/secrets/kubernetes.io/serviceaccount/namespace", "utf-8");
  const token = await readFile("/var/run/secrets/kubernetes.io/serviceaccount/token", "utf-8");
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
