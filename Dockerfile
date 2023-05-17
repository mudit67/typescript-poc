FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY  package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["tail" ,"-F", "README.md"]
