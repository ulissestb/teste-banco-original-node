# Desafio Banco Original
Este projeto é um desafio proposto pelo banco original em seu processo seletivo.
Para instalar o projeto, você precisará ter instalado na sua máquina: Docker e nodejs.
  
## Inicialização
  
- para baixar o projeto, use o comando:
`git clone https://github.com/ulissestb/teste-banco-original-node.git`  

- em seguida, entre na pasta do projeto e use o comando 
`git checkout develop`  para mudar para branch de desenvolvimento

- para instalar as dependências do projeto, use:
`npm install `

Antes de iniciar o projeto, precisaremos baixar um container contendo o banco de dados mySQL
- use o comando abaixo para instalar o banco de dados
`docker run -p 3306:3306 --name original -e MYSQL_ROOT_PASSWORD=root -d mysql` 

Após ter o container e o banco de dados instalado. Iremos inicializar a criação do banco de dados usando o Sequelize.
- Use o comando: 
`yarn sequelize db:create` 

- Agora iremos criar as tabelas e relacionamentos usando o comando:
`yarn sequelize db:migrate` 

Agora é só iniciar o projeto com o `yarn dev ` ou `npm run dev`  