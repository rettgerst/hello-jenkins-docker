FROM node:10
ENV SERVER_PORT 80
COPY package* ./
COPY app.js .
RUN npm ci

CMD ["node", "app.js"]
