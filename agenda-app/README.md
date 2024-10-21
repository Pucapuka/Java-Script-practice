# Projeto de Banco de Dados

Este projeto consiste de um CRUD com um cadastro de agenda de aluno.
A estrutura do trabalho está especificada no arquivo dentro da pasta "estrutura do projeto".
O arquivo server.js é o que executa na porta (escolhida arbitrariamente a 3000) do localhost.
O armazenamento será em banco de dados SQL (foi utilizado o Postgres como SGBD).

Para rodar o programa, certifique-se de ter o node instalado e estar na pasta "\agenda-app". No terminal, digite o
comando "node server.js".

## Restaurar o Banco de Dados

1. Certifique-se de que o PostgreSQL está instalado e rodando.
2. Crie um banco de dados vazio chamado `agenda_db`:

   na linha de comando:
    createdb -U seu_usuario agenda_db
3. Importe o backup:

   na linha de comando:
    psql -U seu_usuario -d agenda_db -f backup/backup_agenda_db.sql


