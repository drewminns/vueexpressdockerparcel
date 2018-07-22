FROM node:9.11.2-alpine

WORKDIR /usr/src/client

COPY package.json .

RUN npm install -yq\
  && npm cache clean --force \
  && mv /usr/src/client/node_modules /node_modules

COPY . .

EXPOSE 8080
# Hot Reload Port
EXPOSE 4343

CMD ["npm", "run", "dev"]