FROM node:9.11.2-alpine

WORKDIR /usr/src/server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "dev"]