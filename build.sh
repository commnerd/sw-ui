#!/bin/bash

docker build --squash -t commnerd/workspace:overlay . || docker build -t commnerd/workspace:overlay .
