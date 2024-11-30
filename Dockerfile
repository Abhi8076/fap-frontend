FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]