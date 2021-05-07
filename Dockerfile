FROM node:latest

ADD . /home
WORKDIR /home

RUN npm ci

ENTRYPOINT ["/home/entrypoint.sh"]
