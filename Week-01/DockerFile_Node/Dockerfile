#  Docker file is a text document that contain commands to assemble an images.
# Docker can then build an image by reading those instructions.

FROM node:19-alpine

COPY package.json   /app/
COPY src           /app/

WORKDIR /app

RUN npm install

CMD ["node","server.js"]

