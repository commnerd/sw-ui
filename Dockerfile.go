FROM commnerd/workspace

RUN apt-get install -y golang && \
  echo "if [ ! -d ~/Workspace/go ]; then mkdir -p ~/Workspace/go/src && mkdir -p ~/Workspace/go/bin; fi" >> ~/.bashrc \
  echo "export GOPATH=~/Workspace/go" >> ~/.bashrc
