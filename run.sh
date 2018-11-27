#!/bin/bash

docker run -d --restart always --privileged -v ~/Workspace:/home/commnerd/workspace -v ~/.ssh:/home/commnerd/.ssh -p 80:80 --name workspace commnerd/workspace
