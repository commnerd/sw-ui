FROM debian

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
        apt-utils
        software-properties-common \
        supervisor \
        nginx \
        locales-all \
        sudo \
        tmux \
        net-tools \
        vim \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg2 \
        software-properties-common \
        openssh-server

RUN sed -i 's/^%.*ALL=(ALL:ALL) ALL/%sudo   ALL=(ALL) NOPASSWD: ALL/g' /etc/sudoers

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
  apt-get update && \
  apt-get install -y --allow-unauthenticated docker-ce docker-compose && \
  if [ ! -d /etc/docker ]; then mkdir /etc/docker; fi && \
  echo '{ "experimental": true }' > /etc/docker/daemon.js

RUN useradd -s /bin/bash -mu1000 -Groot,sudo,docker -p '$1$ohKHD8s/$uWgvbSJCBL7I.Pm.k.RUA/' commnerd && \
    echo "if [ ! -d /home/commnerd/.ssh ]" >> /home/commnerd/.bashrc && \
    echo "then" >> /home/commnerd/.bashrc && \
    echo "  sudo cp -fR /root/.ssh /home/commnerd" >> /home/commnerd/.bashrc && \
    echo "fi" >> /home/commnerd/.bashrc && \
    echo "sudo chown -fR commnerd:commnerd /home/commnerd/.ssh" >> /home/commnerd/.bashrc && \
    echo "sudo chmod 400 /home/commnerd/.ssh/*sa" >> /home/commnerd/.bashrc && \
    echo "alias mike='ssh ubuntu@michaeljmiller.net'" >> /home/commnerd/.bashrc

RUN mkdir /run/sshd

VOLUME ["/home/commnerd/Workspace", "/root/.ssh", "/var/lib/docker"]

RUN sudo -u commnerd git config --global user.name "Michael J. Miller" && sudo -u commnerd git config --global user.email "commnerd@gmail.com"

ADD configs/supervisor/conf.d/* /etc/supervisor/conf.d/

EXPOSE 80

CMD ["supervisord", "-nc", "/etc/supervisor/supervisord.conf"]
