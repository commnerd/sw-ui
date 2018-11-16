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

RUN echo "LC_ALL=en_US.UTF-8" >> /etc/environment && \
    echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && \
    echo "LANG=en_US.UTF-8" > /etc/locale.conf && \
    locale-gen en_US.UTF-8

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
  apt-get update && \
  apt-get install -y --allow-unauthenticated docker-ce docker-compose && \
  if [ ! -d /etc/docker ]; then mkdir /etc/docker; done && \
  echo '{ "experimental": true }' > /etc/docker/daemon.js

RUN useradd -mu1000 -Groot,sudo,docker commnerd 

USER commnerd

WORKDIR /home/commnerd

RUN git config --global user.name "Michael J. Miller" && git config --global user.email "commnerd@gmail.com" 

CMD ["dockerd"]
