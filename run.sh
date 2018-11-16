#!/bin/bash

docker run -it --rm --name workspace -v ~/:/home/commnerd -v /var/run/docker.sock commnerd/workspace bash
