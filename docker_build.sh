#!/bin/bash

IMAGE_NAME=$1

docker-compose build --build-arg IMAGE_TAG=$IMAGE_NAME hispana-prod
