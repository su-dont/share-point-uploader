FROM node:latest

COPY . /home
WORKDIR /home

RUN whoami
RUN pwd
RUN ls -al

RUN npm ci

ENTRYPOINT ["/home/entrypoint.sh"]
