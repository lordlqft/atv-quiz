const perguntas = [
    {
        pergunta: "Qual linguagem é executada diretamente no navegador?",
        alternativas: ["Python", "JavaScript", "C#", "Java"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual tecnologia é responsável pela estilização de páginas web?",
        alternativas: ["HTML", "SQL", "CSS", "Python"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual comando cria uma constante em JavaScript?",
        alternativas: ["let", "var", "function", "const"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual estrutura é utilizada para verificar uma condição?",
        alternativas: ["if", "for", "while", "array"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual tag HTML é utilizada para criar um link?",
        alternativas: ["<p>", "<a>", "<img>", "<div>"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual comando é utilizado para exibir algo no console?",
        alternativas: ["print()", "show()", "console.log()", "display()"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual estrutura permite armazenar vários valores em uma variável?",
        alternativas: ["Array", "Boolean", "String", "Number"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual método adiciona um elemento ao final de um array?",
        alternativas: ["remove()", "delete()", "shift()", "push()"],
        respostaCorreta: 3
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const elementoPergunta = document.querySelector("#pergunta");
const elementoAlternativas = document.querySelector("#alternativas");
const elementoResultado = document.querySelector("#resultado");
const botaoProxima = document.querySelector("#proxima");
const botaoReiniciar = document.querySelector("#reiniciar");

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    elementoPergunta.textContent = pergunta.pergunta;

    elementoAlternativas.innerHTML = "";

    botaoProxima.disabled = true;

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;
        botao.classList.add("alternativa");

        botao.addEventListener("click", () => {

            verificarResposta(indice);

        });

        elementoAlternativas.appendChild(botao);

    });

}

function verificarResposta(indice) {

    const pergunta = perguntas[perguntaAtual];

    const botoes = elementoAlternativas.querySelectorAll("button");

    botoes.forEach((botao, indiceBotao) => {

        botao.disabled = true;

        if (indiceBotao === indice) {

            if (indice === pergunta.respostaCorreta) {

                botao.classList.add("correta");

            } else {

                botao.classList.add("incorreta");

            }

        }

    });

    if (indice === pergunta.respostaCorreta) {

        pontuacao++;

        elementoResultado.textContent = "Resposta correta!";

    } else {

        elementoResultado.textContent = "Resposta incorreta!";

    }

    botaoProxima.disabled = false;

}

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

        elementoResultado.textContent = "";

    } else {

        finalizarQuiz();

    }

}

function finalizarQuiz() {

    elementoPergunta.textContent = "Quiz finalizado!";

    elementoAlternativas.innerHTML = "";

    botaoProxima.style.display = "none";

    elementoResultado.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;

    if (pontuacao === 8) {

        elementoResultado.textContent += " Excelente! Você acertou todas!";

    } else if (pontuacao >= 5) {

        elementoResultado.textContent += " Muito bem!";

    } else {

        elementoResultado.textContent += " Continue estudando!";

    }

    botaoReiniciar.style.display = "inline-block";

}

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    elementoResultado.textContent = "";

    botaoProxima.style.display = "inline-block";

    botaoReiniciar.style.display = "none";

    carregarPergunta();

}

botaoProxima.addEventListener("click", proximaPergunta);

botaoReiniciar.addEventListener("click", reiniciarQuiz);

carregarPergunta();