# @arve0/kubeconfig
Reads kubernetes context from $HOME/.kube/config or /var/secrets/kubernetes.io/serviceaccount.

## Install
```sh
npm install @arve0/kubeconfig
```

## Usage
```js
const { getKubeContext } = require("@arve0/kubeconfig");

(async function main() {
  const context = await getKubeContext();
  console.log(context);
})();
```