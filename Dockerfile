FROM alpine/node:latest

# add working dir
ADD . .

ENTRYPOINT ["/entrypoint.sh"]
