import { getKubeContext } from "."

(async function main() {
  const context = await getKubeContext();
  console.log(context);
})();
