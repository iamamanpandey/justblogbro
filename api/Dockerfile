FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080
ENV HOST 0.0.0.0

CMD npm start