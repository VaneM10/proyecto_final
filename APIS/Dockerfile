FROM node:20

USER root

RUN apt-get update && apt-get install -y \
    wget \
    nano

RUN npm cache clean --force

RUN npm install -g npm@8.12.1

RUN npm install cors -g \
    && npm i dotenv -g \
    && npm i express -g \
    && npm i jsonwebtoken -g \
    && npm i nodemon -g 

RUN mkdir -p /frm/farmaciaAPI/

WORKDIR /frm/farmaciaAPI/

COPY Farmacia/package*.json /frm/farmaciaAPI/

RUN npm install

RUN npm install dotenv --save-dev

COPY Farmacia/ /frm/farmaciaAPI/
#RUN prisma generate

CMD ["nodemon", "app.js"]