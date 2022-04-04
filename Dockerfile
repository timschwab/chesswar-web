FROM node:17
WORKDIR /chesswar/web/src

COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 8001

CMD node run
