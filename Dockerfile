FROM node:lts-alpine

ENV NODE_ENV=production

# Define o diretório de trabalho dentro do container
WORKDIR /apicep

COPY . .

RUN npm install 

RUN rm -rf src
RUN rm -rf tsconfig.json

RUN npm prune --production

RUN npm build

CMD ["node", "dist/servidor.js"]

EXPOSE 3333