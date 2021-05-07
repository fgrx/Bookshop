FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /user/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3006

CMD ["npm","start"]