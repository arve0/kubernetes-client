FROM node:18
COPY package* /app/
COPY kubeconfig /app/kubeconfig
COPY kubernetes-client-fetch /app/kubernetes-client-fetch
WORKDIR /app

RUN npm install -w kubeconfig -w kubernetes-client-fetch

ENTRYPOINT ["npm", "run", "test:docker", "-w", "kubeconfig", "-w", "kubernetes-client-fetch"]