# kubernetes-client-fetch
A minimal kubernetes client using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Install
```sh
npm install kubernetes-client-fetch
```

## Usage
### Node
```js
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
```

## Why?
Official [@kubernetes/client-node](https://www.npmjs.com/package/@kubernetes/client-node) is
[quite bloated](https://arve0.github.io/npm-download-size/#@kubernetes%2fclient-node)
with 155 dependencies and 3MiB in totalt tar.gz size. That is 25 mega bytes unpacked!!

In comparrison this package is 355KiB gzipped and 7.1MiB unpacked. If your cluster
API-server have self signed certificate, you need to add node-fetch too (119KiB gzipped).

Official client [is being re-wired to use fetch](https://github.com/kubernetes-client/javascript/issues/754),
but work seems to have stalled.

Also, API of @kubernetes/client-node is quite ugly, as parameters are not named:

```js
await getCoreV1Api().patchNamespacedServiceAccount(
  serviceAccount,
  namespace,
  patch,
  undefined, // wtf
  undefined, // wtaf
  undefined, // come on!
  undefined, // really?!
  options // ahh, finally
);
```

## How?
This is just a generation using the [official generator](https://github.com/kubernetes-client/gen/tree/master/openapi).
See [Makefile](../Makefile) for details.