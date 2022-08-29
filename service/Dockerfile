FROM node:lts AS builder

USER node

RUN mkdir -p /home/node/build

WORKDIR /home/node/build

COPY --chown=node package.json yarn.lock ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

COPY --chown=node . .

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts-alpine

USER node

WORKDIR /service

COPY --from=builder /home/node/build .

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}

CMD [ "node", "." ]
