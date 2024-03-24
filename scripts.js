const inicio = document.querySelector('.inicial');
const questions = document.querySelector('.questions-container');
const questionP = document.querySelector('.questionP');
const answercontainer = document.querySelector('.answer-container');
const fim = document.querySelector('.final');
const result = document.querySelector('.resultado');

const listQuestion = [
    {
        question: 'Qual é a função utilizada para imprimir uma mensagem na tela em Python?',
        answers: [

            { text: 'print()', value: true },
            { text: 'echo()', value: false },
            { text: 'display()', value: false },
            { text: 'show()', value: false }

        ]
    },

    {
        question: 'Qual é o método utilizado para converter uma string em letras minúsculas em Python?',
        answers: [

            { text: 'toLowerCase()', value: false },
            { text: 'lower()', value: true },
            { text: 'convertToLower()', value: false },
            { text: 'caseLower()', value: false }

        ]
    },

    {
        question: 'Em Python, qual é a função utilizada para remover e retornar o último elemento de uma lista?',
        answers: [

            { text: 'remove_last()', value: false },
            { text: 'pop()', value: true },
            { text: 'delete_last()', value: false },
            { text: 'discard()', value: false }

        ]
    },
    {
        question: 'O que é a PEP 8 em Python?',
        answers: [

            { text: ' Um interpretador Python embutido.', value: false },
            { text: 'Uma biblioteca padrão do Python.', value: false },
            { text: 'Um IDE popular para desenvolvimento em Python.', value: false },
            { text: 'Um documento que define as diretrizes de estilo de codificação em Python.', value: true }

        ]
    },


    {
        question: 'Em Python, o que é a declaração pass?',
        answers: [

            { text: 'Uma declaração que não faz nada e é usada se preencha uma lacuna,', value: true },
            { text: 'Uma forma de criar uma lista vazia.', value: false },
            { text: 'Uma função embutida para ordenar listas.', value: false },
            { text: 'Um operador usado para concatenar strings.', value: false }

        ]
    },
]
questions.style.display = 'none';
fim.style.display = 'none';

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('botao-iniciar')) {
        inicio.style.display = 'none';
        questions.style.display = 'block';
        valueAnswer();
    } else if (el.classList.contains('answer')) {
        const selectedAnswer = el.classList.contains('true');
        if (selectedAnswer) {
            contadorcorreta++;
            result.textContent = contadorcorreta + '/5';
        }
        contadorQuestion++;
        valueAnswer(contadorQuestion);
    }
});

let contadorQuestion = 0;
let contadorcorreta = 0;

function valueAnswer(contador = 0) {
    if (contador >= listQuestion.length) {
        questions.style.display = 'none';
        fim.style.display = 'block';
        return;
    }
    questionP.textContent = listQuestion[contador].question;
    answercontainer.innerHTML = ''; // Limpa as respostas anteriores
    listQuestion[contador].answers.forEach((contadoraAnswer) => {
        const newAnswer = document.createElement('button');
        newAnswer.textContent = contadoraAnswer.text;
        newAnswer.classList.add('answer');
        if (contadoraAnswer.value) {
            newAnswer.classList.add('true');
        }
        answercontainer.appendChild(newAnswer);
    });
}