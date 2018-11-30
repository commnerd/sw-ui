#!/bin/bash

docker login

./build.sh && docker push commnerd/workspace
