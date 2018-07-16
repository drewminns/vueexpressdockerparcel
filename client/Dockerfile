FROM node:9.11.2-alpine

WORKDIR /usr/app/client

COPY package.json .

RUN npm install \
  && npm cache clean --force \
  && mv /usr/app/client/node_modules /node_modules

COPY . .

EXPOSE 8080
# Hot Reload Port
EXPOSE 4343

CMD ["npm", "run", "dev"]