FROM debian

RUN apt-get update && apt-get upgrade -y \
  add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
     $(lsb_release -cs) \
     stable" \
  && apt-get install -y \
  sudo \
  net-tools \
  vim \
  docker-ce \
  useradd -mu1000 -Gcommnerd,root,sudo, commnerd 

USER commnerd
