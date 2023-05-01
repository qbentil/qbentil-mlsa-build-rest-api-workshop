FROM node:19.5.0-alpine

WORKDIR /

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
