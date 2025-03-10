# Dockerfile para o Service 1
FROM node:20-alpine

WORKDIR /background-service

COPY yarn*.json ./
RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]