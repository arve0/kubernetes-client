all: kubernetes-client-fetch/dist test

gen:
	git submodule add https://github.com/kubernetes-client/gen

generated-client: settings
	gen/openapi/typescript-fetch.sh generated-client settings
	npm install -w generated-client

generated-client/dist: generated-client
	rm -rf generated-client/dist
	npm run build -w generated-client

generated-client/dist/runtime.js: generated-client/dist
	sed -i.bak 's/window.fetch.bind(window)/fetch/' generated-client/dist/runtime.js

kubernetes-client-fetch/dist: generated-client/dist generated-client/dist/runtime.js
	rm -rf kubernetes-client-fetch/dist
	cp -r generated-client/dist/ kubernetes-client-fetch/dist/

test:
	npm test -w kubeconfig
	npm test -w kubernetes-client-fetch
