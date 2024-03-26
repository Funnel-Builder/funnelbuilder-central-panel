VERSION ?= v0.0.1

REGISTRY ?= bdfunnelbuilder

REGISTRY_WITH_PROJECT_SUFFIX ?= ota-common-panel

VERSION_PROD ?= v0.0.13

REGISTRY_PROD ?= bdfunnelbuilder

REGISTRY_WITH_PROJECT_SUFFIX_PROD ?= bdf-common-prod

docker: docker-build docker-push

prod: docker-build-prod docker-push-prod

docker-build:
	docker build --build-arg CONFIG_FILE=dev --build-arg CONFIG_PATH=/docker/common-panel-service/common -f docker/Dockerfile.production -t ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION} .

docker-push:
	docker push ${REGISTRY}/${REGISTRY_WITH_PROJECT_SUFFIX}:${VERSION}

docker-build-prod:
	docker build --build-arg CONFIG_FILE=prod --build-arg CONFIG_PATH=/docker/common-panel-service-prod/common -f docker/Dockerfile.production -t ${REGISTRY_PROD}/${REGISTRY_WITH_PROJECT_SUFFIX_PROD}:${VERSION_PROD} .

docker-push-prod:
	docker push ${REGISTRY_PROD}/${REGISTRY_WITH_PROJECT_SUFFIX_PROD}:${VERSION_PROD}
