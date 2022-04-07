1° yarn install;

2° Inicializar o container:
docker-compose up -d

3° Acessar o banco de dados informado no env e criar a database meegue

4° o yarn build

5° yarn typeorm migration:generate -n insertUser

6° yarn build

7° yarn typeorm migration: run

8° Inicilizar a aplicação
yarn start:dev (Modo desenvolvimento)
yarn start:prod (Modo produção)

Caso queira rodar o teste unitário:
yarn test

Projeto realizado em clean architecture
Banco MySql
Typeorm


