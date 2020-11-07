# Secretum

Aplicação simples para codificação de senhas

## Índice

* [1. Intodução](#1-intodução)
* [2. Planejamento](#2-planejamento)
* [3. Processo criativo](#3-processo-criativo)
* [4. Desenvolvimento](#4-desenvolvimento)
* [5. Funcionamento](#5-funcionamento)


***

## 1. Intodução

Primeiro projeto da quinta turna do bootcamp de front-end da [Laboratória](https://github.com/Laboratoria).
O projeto consiste na criação de uma aplicação web que criptografe e descriptografe menssagens utilizando a [Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) durante duas semanas, sendo duas sprints na metodologia Agile.


## 2. Planejamento
Todo planejamento do projeto foi feito com método Kaban, utilizando o [Trello](https://trello.com/) como ferramenta. Foram desenvolvidos pequenos passos, com incusão de estudos das linguagens utilizadas, durante as duas sprints. O planejamento do layout foi feito em papel.


## 3.Processo criativo
A aplicação chamada *Secretum* (segredo em latim) foi pensada para facilitar a criação de senhas de acesso de maneira simples, visando um público diverso, que fazem uso de aplicações web e que podem tornar qualquer senha usual em uma menssagem criptografada, afim de aumentar sua sgurança.
Usamos infinitas aplicações nos dias de hoje, cada uma delas exige uma senha para acesso, a aplicação permite que você crie menssagens ou palavras criptografadas, inclusive diferentes codigicações para a mesma palavra, facilitando para os internautas as variações nas criações de senhas, seja qual for a funcionalidade da mesma.


## 4. Desenvolvimento
Este projeto foi o primeiro que desenvolvi, sendo assim, houve uma série de percalços durante o processo de desenvolvimento do código. Em suma, na primeira sprint foi iniciado o HTML5  e criado a estrutura da página, em conjunto com o CSS3, para dar visualidade do funcionamento. A seguda sprint foi dedicada ao desenvolvimento da lógica do projeto, em Java Script, que foi bastante desafiador em convergência com os estudos que possibilitaram seu funcionamento. Infelizmente não foi possivel ter tempo hábil, ao final da segunda sprint, para desenvolver melhor o layout, como desejado. 


## 5. Funcionamento
O *Secretum* permite que o usuario escreve no campo "texto" a palavra, que deseja codificar. Em seguida é possivel escolher qual o deslocamento das letras do alfabelo desejado, e baseado nisso, após clicar no botão "Codificar", a palavra codificada aparece no campo "Senha" em letras maiúsculas. Para descodificar a mesma, basta copiar a palavra codificada no campo "texto", escolher o mesmo deslocamento das letras do alfabelo, e clicar no botão "Decodificar", que a palavra volta a sua origem no campo "Senha".  
Neste momento a aplicação aceita letras maiúsculas e minúsculas, sem acentos, caracteres especiais e espaçamento.

