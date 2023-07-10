#!/bin/bash

IMAGE_NAME="$1"

# Verify that the image name is provided
if [ -z "$IMAGE_NAME" ]; then
  echo "Please provide an image name."
  exit 1
fi

# Build the Docker image using the provided image name and disable caching
docker build --no-cache -t "eutell/hispana:${IMAGE_NAME}" --target production .