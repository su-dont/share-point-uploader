FROM node:latest

ADD . /home
WORKDIR /home

RUN whoami
RUN pwd
RUN ls -al

RUN npm ci

ENTRYPOINT ["/home/entrypoint.sh"]
