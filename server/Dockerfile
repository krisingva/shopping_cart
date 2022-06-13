FROM node:14-slim

WORKDIR /

COPY ./package.json .
RUN npm install 

COPY . .
CMD ["node", "index.js"]