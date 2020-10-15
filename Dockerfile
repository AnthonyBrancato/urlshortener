FROM node

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8080

CMD ["node", "app.js"]