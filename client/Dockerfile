# First stage: build client and get 
# static content in '/app/build' dir.
FROM node:16-alpine as builder
RUN mkdir -p /app && \
    chown node /app
WORKDIR '/app'
USER node
COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# Second Stage: serve static built content using nginx
# /use/share/nginx/html
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /apps/build /usr/share/nginx/html
