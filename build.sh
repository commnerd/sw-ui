#!/bin/bash

docker build --squash -t commnerd/workspace . || docker build -t commnerd/workspace .
