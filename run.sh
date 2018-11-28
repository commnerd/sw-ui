#!/bin/bash

docker run -d --restart always --privileged -v ~/Workspace:/home/commnerd/Workspace -v ~/.ssh:/root/.ssh -p 80:80 -p 9000:9000 --name workspace commnerd/workspace
