FROM node:20-alpine

RUN mkdir -p /var/www/central-user-panel/nuxt-app
WORKDIR /var/www/central-user-panel/nuxt-app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

RUN rm -rf node_modules

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]