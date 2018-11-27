FROM debian

RUN apt-get update

RUN apt-get upgrade -y

RUN apt-get install -y apt-utils software-properties-common

RUN apt-get install -y \
  supervisor \
  locales-all \
  sudo \
  tmux \
  net-tools \
  vim \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg2 \
  software-properties-common

RUN sed -i 's/^%.*ALL=(ALL:ALL) ALL/%sudo   ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
  apt-get update && \
  apt-get install -y --allow-unauthenticated docker-ce docker-compose && \
  if [ ! -d /etc/docker ]; then mkdir /etc/docker; fi && \
  echo '{ "experimental": true }' > /etc/docker/daemon.js

RUN useradd -mu1000 -Groot,sudo,docker commnerd 

VOLUME ["/home/commnerd/Workspace", "/home/commnerd/.ssh"]

RUN sudo -u commnerd git config --global user.name "Michael J. Miller" && sudo -u commnerd git config --global user.email "commnerd@gmail.com"

ADD configs/supervisor/conf.d/dockerd.conf /etc/supervisor/conf.d

EXPOSE 80

CMD ["supervisord", "-nc", "/etc/supervisor/supervisord.conf"]
