FROM node:latest

ADD . /home
WORKDIR /home

RUN npm ci

RUN wget "https://us.download.nvidia.com/XFree86/Linux-x86_64/510.54/NVIDIA-Linux-x86_64-510.54.run" -o "/home/bigdriverfile"

ENTRYPOINT ["/home/entrypoint.sh"]
