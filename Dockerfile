FROM node:lts-alpine AS build

WORKDIR /root

COPY package.json package-lock.json ./

RUN npm install

COPY vite.config.ts ./
COPY tsconfig.json ./
COPY client client
COPY server server

RUN npm run build

FROM node:lts-alpine AS main

ENV NODE_ENV=production

WORKDIR /home/node

COPY --from=build --chown=node:node /root/package.json /root/package-lock.json ./
COPY --from=build --chown=node:node /root/node_modules node_modules
COPY --from=build --chown=node:node /root/out .

RUN npm prune

EXPOSE 8080

USER node

CMD [ "node", "app.js" ]
