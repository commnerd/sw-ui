FROM debian

RUN apt-get update

RUN apt-get upgrade -y

RUN apt-get install -y apt-utils software-properties-common

RUN apt-get install -y \
  sudo \
  tmux \
  net-tools \
  vim \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg2 \
  software-properties-common

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
  apt-get update && \
  apt-get install -y --allow-unauthenticated docker-ce

RUN useradd -mu1000 -Groot,sudo commnerd 

USER commnerd

WORKDIR /home/commnerd
