FROM node:16.14 

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

CMD [ "yarn", "run", "build" ]