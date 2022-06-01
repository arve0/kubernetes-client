import { CoreV1Api, Configuration } from "kubernetes-client-fetch";
import { getKubeContext } from "@arve0/kubeconfig";
import fetch from "node-fetch";
import https from "https";

(async function main() {
  const context = await getKubeContext();

  // only needed when API-server have self signed ca
  // hack to make node-fetch use certificate authority
  https.globalAgent.options.ca = [context.cluster.ca]

  const configuration = new Configuration({
    fetchApi: fetch, // only needed when API-server have self signed ca
    basePath: context.cluster.server,
    headers: {
      authorization: "Bearer " + context.user.token,
    },
  });
  const core = new CoreV1Api(configuration);
  const pods = await core.listNamespacedPod({ namespace: "default" });

  console.log(pods.items.map((pod) => pod.metadata.name));
})();
