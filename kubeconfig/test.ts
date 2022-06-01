import { getKubeContext } from "@arve0/kubeconfig";

(async function main() {
  const context = await getKubeContext();
  console.log(context);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
