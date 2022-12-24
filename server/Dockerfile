FROM node:16-alpine

RUN mkdir -p /app && \
    chown node /app

USER node
WORKDIR /app

COPY --chown=node:node package.json .
RUN npm install

COPY --chown=node:node . .

CMD npm run start
