FROM node:17.6-alpine3.14

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY package.json .

RUN npm install

COPY . .

CMD [ "sh", "entrypoint.sh" ]
