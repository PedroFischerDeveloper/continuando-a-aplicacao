# imagem
FROM node

# diretório que será criado
WORKDIR /usr/app

COPY package.json ./

# rodando o npm install para baixar as dependências
RUN npm install

# após baixar as dependências copia tudo para a pasta raiz
COPY . .

#EXPONDO A PORTA PARA FORA 
EXPOSE 3333

#RODE OS COMANDOS QUE PRECISAMOS RODAR
CMD ["npm", "run", "dev"]

