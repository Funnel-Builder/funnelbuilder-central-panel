VERSION ?= v0.0.1

REGISTRY ?= bdfunnelbuilder

REGISTRY_WITH_PROJECT_SUFFIX ?= ota-common-panel

docker: docker-build docker-push

docker-build:
	docker build -f docker/Dockerfile.production -t ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION} .

docker-push:
	docker push ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION}
