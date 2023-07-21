FROM node:18.15.0-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev:api"]