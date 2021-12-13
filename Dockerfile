FROM node:alpine
WORKDIR /app
COPY ./src ./src
COPY package*.json ./
COPY tsconfig.json .
RUN npm install
EXPOSE 3333
RUN npm run build

CMD ["npm",  "run", "start"]