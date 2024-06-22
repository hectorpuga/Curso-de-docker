FROM node:19.2-alpine3.16
# /app

WORKDIR /app

COPY app.js package.json ./

RUN npm i

CMD [ "node","app.js" ]