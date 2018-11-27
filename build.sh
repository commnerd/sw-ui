#!/bin/bash

docker build --squash -t commnerd/workspace . || docker build -t commnerd/workspace .
docker build --squash -t commnerd/workspace:tunnel -f Dockerfile.tunnel commnerd/workspace . || docker build -t commnerd/workspace:tunnel -f Dockerfile.tunnel .
