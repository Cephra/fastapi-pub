FROM node:lts AS builder

USER node

RUN mkdir -p /home/node/build

WORKDIR /home/node/build

COPY --chown=node . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts-alpine

USER node

WORKDIR /app

COPY --from=builder /home/node/build  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
