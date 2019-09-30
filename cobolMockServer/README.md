# Cobol Mock Server

Servidor utilizado para simular o sistema legado em Cobol, responsável pela persistência de dados de Turmas, Disciplinas e Alunos

## [Link do desenvolvedor](https://www.npmjs.com/package/mock-json-server)

## Execução  

Execute o arquivo bash: ./startServer.sh  
O servidor "Json Server" será iniciado em http://localhost:8000, expondo os seguintes endpoints:    
- **/api/classes** => Lista de Turmas.  
- **/api/classes/:id** => Turma específica, com id entre 1 e 3.  
- **/api/students** => Lista de Alunos.  
- **/api/students/:id** => Aluno específico, com id entre 1 e 3.  
- **/api/disciplines** => Lista de Disciplinas, associadas às Turmas. 
- **/api/disciplines/:id** => Disciplina específica, com id entre 1 e 9.  

