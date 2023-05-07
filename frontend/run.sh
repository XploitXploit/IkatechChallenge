#!/bin/sh

docker build -t ikatech_challenge_fp .
docker run -p 3333:80 ikatech_challenge_fp