<<<<<<< HEAD

=======
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
>>>>>>> 968163b0d65c6d5465c4ea300af92abded26c73e
