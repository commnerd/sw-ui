#!/bin/bash

docker kill workspace
docker rm workspace
docker rmi commnerd/workspace
