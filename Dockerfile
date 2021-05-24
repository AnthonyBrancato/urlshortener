# It won't work because it's broken and I don't understand Docker yet.
FROM node

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8080

CMD ["node", "app.js"]
