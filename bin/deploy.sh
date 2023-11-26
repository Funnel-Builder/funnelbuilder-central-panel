#!/bin/bash

# Check the argument passed to the script
if [ "$1" == "local" ]; then
    echo "Starting development environment..."
    docker compose -f docker/compose/docker-compose.dev.yml up --build -d
elif [ "$1" == "prod" ]; then
    echo "Starting production environment..."
    docker compose -f docker/compose/docker-compose.yml up --build -d
else
    echo "Invalid argument. Please use 'local' or 'prod'."
fi
