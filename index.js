const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "let"
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "--"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas é uma forma correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário de várias linhas",
        "/* Este é um comentário de várias linhas */",
        "<!-- Este é um comentário de várias linhas -->"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados, retornando true apenas se ambos forem iguais.",
        "Atribui um valor a uma variável.",
        "Compara valores sem levar em consideração o tipo de dados."
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()'?",
      respostas: [
        "Selecionar vários elementos do DOM.",
        "Selecionar um elemento do DOM com base em seu ID.",
        "Selecionar um elemento do DOM com base em sua classe."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do código: console.log(3 + '3')?",
      respostas: [
        "33",
        "6",
        "NaN"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz?",
      respostas: [
        "Remove um ouvinte de evento de um elemento.",
        "Adiciona um ouvinte de evento a um elemento.",
        "Seleciona um elemento do DOM com base em seu ID."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de typeof []?",
      respostas: [
        "'object'",
        "'array'",
        "'undefined'"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '||' faz em JavaScript?",
      respostas: [
        "Operador de negação lógica.",
        "Operador de multiplicação.",
        "Operador de OU lógico."
      ],
      correta: 2
    },
    {
      pergunta: "Como você inclui um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha.",
        "<!-- Este é um comentário de uma linha. -->",
        "/* Este é um comentário de uma linha. */"
      ],
      correta: 0
    }
   ];
   
   const quiz =  document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContentContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetição
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
   
     for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
   
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }  
   
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       } 
       
   
       quizItem.querySelector('dl').appendChild(dt)
     }
     quizItem.querySelector('dl dt').remove()
   
    // coloca a pergunta na tela   
   quiz.appendChild(quizItem)  
   }    