FROM node:latest

RUN pwd
RUN ls

ADD . /home
WORKDIR /home

RUN npm ci

# RUN cd /home && ls -al && wget "https://us.download.nvidia.com/XFree86/Linux-x86_64/510.54/NVIDIA-Linux-x86_64-510.54.run" && ls -al
# ADD "NVIDIA-Linux-x86_64-510.54.run" /home/mybigfile
# RUN wget "https://us.download.nvidia.com/XFree86/Linux-x86_64/510.54/NVIDIA-Linux-x86_64-510.54.run"

RUN pwd
RUN ls

# COPY "./NVIDIA-Linux-x86_64-510.54.run" "/home/bigdriverfile"

ENTRYPOINT ["/home/entrypoint.sh"]
