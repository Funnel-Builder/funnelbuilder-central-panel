#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin master

./bin/deploy.sh prod

echo "Deployment finished!"