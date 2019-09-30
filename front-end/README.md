# FrontEnd

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 7.3.6.

## Servidor de Desenvolvimento

Execute o comando `ng serve` para o subir o servidor de desenvolvimento e então navegue para `http://localhost:4200/`.  
O servidor será reiniciado a cada vez que uma alteração é feita no código fonte. 

Para executar o servidor Json que simula o sistema legado (registro de turmas, disciplinas e alunos), veja o arquivo [README.md](../cobolMockServer/README.md) do mock server.

## Build

Execute `ng build` para gerar o build do projeto.  
Os artefatos de build serão armazenados no diretório `dist/`.  
Use a instrução `--prod` para gerar o build de produção.

## Execução de Testes Unitários

Execute o comando `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução dos testes Fim-a-fim

Execute o comando `ng e2e` para rodar os testes fim-a-fim via [Protractor](http://www.protractortest.org/).

## Ajuda Adicional

Para maiores informações sobre Angular CLI use o comando `ng help` e/ou acesse o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Guia

**Menus:**

**Turmas**: Lista os nomes das turmas ativas e seus respectivos turnos a partir do servidor que simula o legado.  
  
![Alt text](doc/images/turmas.jpg?raw=true "Turmas")  
  
**Alunos**: Lista os nomes dos alunos e dados pessoais a partir do servidor que simula o legado.  

![Alt text](doc/images/alunos.jpg?raw=true "Alunos")  

**Disciplinas**: Lista os nomes das disciplinas e turmas as quais estão relacionadas a partir do servidor que simula o legado.  

![Alt text](doc/images/disciplinas.jpg?raw=true "Disciplinas") 

**Matrículas**: Lista as disciplinas matriculadas para o aluno escolhido.  

![Alt text](doc/images/matriculas.jpg?raw=true "Matrículas") 

O usuário tem a opção de Adicionar nova matrícula, clicando no botão "Adicionar" e sendo direcionado à tela de Adicionar Matrícula, ou Apagar/Cancelar a matrícula de uma disciplina associada a um aluno específico, clicando no respectivo botão "Apagar".  

![Alt text](doc/images/apagarMatricula.jpg?raw=true "Apagar matrícula") 

**Matrículas/Adicionar**: Adiciona matrícula de disciplina para determinado aluno em determinada turma, sendo que a lista de disciplinas apresentada é relacionada à turma selecionada.

![Alt text](doc/images/efetuarMatricula.jpg?raw=true "Adicionar matrícula") 
