FROM node:latest

ADD . /home
WORKDIR /home

ENTRYPOINT ["/home/entrypoint.sh"]
