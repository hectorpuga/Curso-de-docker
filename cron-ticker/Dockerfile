# BUILDX
# docker buildx build --platform linxu/amd64, linux/arm64, linux/arm/v7 -t (repositorio/tag) --push .

# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM node:19.2-alpine3.16
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as deps

# /app


WORKDIR /app

COPY . .

RUN npm i

FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as builder

WORKDIR /app


COPY --from=deps /app/node_modules ./node_modules

COPY . .


RUN npm run test


FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as prod-deps

WORKDIR /app
COPY package.json /app/
RUN npm install --prod

FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as runner
# Elimnar archivos y directorios que no necesarios en PROD

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./ 
COPY tasks/ ./tasks
# Unicamente las dependencias de prod

CMD [ "node","app.js" ]