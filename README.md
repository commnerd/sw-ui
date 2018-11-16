# docker-workspace
A consistent Debian-based workspace setup for me using docker

## Run the following to bring up the environment
`docker run -it --rm --name workspace -v ~/:/home/commnerd -v /var/run/docker.sock commnerd/workspace bash`
You can add this command to your bashrc and things should work great.

or

`./run.sh`

The 'run.sh' command calls the docker command above as-is.  If you need customization, please craft the 'docker run' command yourself.


## Build the environment by running
`docker build --squash -t commnerd/workspace .`

or 

`./build.sh`


The 'run.sh' command calls the docker command above as-is.  If you need customization, please craft the 'docker run' command yourself.

#!/bin/bash

docker build -t commnerd/workspace .
