VERSION ?= v0.0.1

REGISTRY ?= bdfunnelbuilder

REGISTRY_WITH_PROJECT_SUFFIX ?= ota-common-panel

VERSION_PROD ?= v0.0.1

REGISTRY_PROD ?= bdfunnelbuilder

REGISTRY_WITH_PROJECT_SUFFIX_PROD ?= bdf-common-prod

docker: docker-build docker-push

prod: docker-build-prod

docker-build:
	docker build -f docker/Dockerfile.production -t ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION} .

docker-push:
	docker push ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION}

docker-build:
	docker build -f docker/Dockerfile.production -t ${REGISTRY_PROD}/${REGISTRY_WITH_PROJECT_SUFFIX_PROD}:${VERSION_PROD} .

docker-push:
	docker push ${REGISTRY_PROD}/${REGISTRY_WITH_PROJECT_SUFFIX_PROD}:${VERSION_PROD}
