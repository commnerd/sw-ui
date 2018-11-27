#!/bin/bash

docker run -d --restart always --privileged -v ~/Workspace:/home/commnerd/workspace -v ~/.ssh:/root/.ssh -p 80:80 --name workspace commnerd/workspace
