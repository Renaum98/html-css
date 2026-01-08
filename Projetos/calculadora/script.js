const digito0 = document.getElementById("dg0")
const digito1 = document.getElementById("dg1")
const digito2 = document.getElementById("dg2")
const digito3 = document.getElementById("dg3")
const digito4 = document.getElementById("dg4")
const digito5 = document.getElementById("dg5")
const digito6 = document.getElementById("dg6")
const digito7 = document.getElementById("dg7")
const digito8 = document.getElementById("dg8")
const digito9 = document.getElementById("dg9")
const mult = document.getElementById("mult")
const sub = document.getElementById("sub")
const soma = document.getElementById("soma")
const divi = document.getElementById("divi")
const igual = document.getElementById("igual")
const porcen = document.getElementById("porcen")
const telaConteudo = document.getElementById("tela-conteudo")

let valorTela = ''; // Variável para armazenar o valor na tela
let operador = '';  // Variável para armazenar o operador
let primeiroValor = ''; // Armazenar o primeiro valor antes da operação

// Função para atualizar o conteúdo da tela
function atualizarTela() {
    telaConteudo.innerText = valorTela;
}

// Funções de operação
function somar(a, b) {
    return a + b;
}

function porcentagem(a, b) {
    return (a / 100) * b
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

function multiplicacao(a, b) {
    return a * b;
}

// Função para lidar com a inserção dos números
function inserirNumero(numero) {
    valorTela += numero; // Adiciona o número à tela
    atualizarTela();
}

// Função para lidar com os operadores
function escolherOperador(op) {
    if (valorTela === '') return; // Evita escolher operador se a tela estiver vazia

    // Se já houver um operador anterior e um valor na tela, o cálculo será feito
    if (primeiroValor !== '') {
        calcular();
    }

    // Armazena o primeiro valor e o operador
    primeiroValor = valorTela;
    operador = op;
    valorTela = `${primeiroValor} ${operador} `; // Exibe o número seguido do operador na tela
    atualizarTela();
}

// Função para calcular o resultado
function calcular() {
    if (valorTela === '') return; // Evita calcular se a tela estiver vazia

    let resultado;
    const segundoValor = parseFloat(valorTela.split(' ')[2]); // Obtém o segundo número (após o operador)
    switch (operador) {
        case '+':
            resultado = somar(parseFloat(primeiroValor), segundoValor);
            break;
        case '-':
            resultado = subtracao(parseFloat(primeiroValor), segundoValor);
            break;
        case '*':
            resultado = multiplicacao(parseFloat(primeiroValor), segundoValor);
            break;
        case '/':
            resultado = divisao(parseFloat(primeiroValor), segundoValor);
            break;
        case '%':
            resultado = porcentagem(parseFloat(primeiroValor), segundoValor);
            break;
        default:
            return;
    }

    valorTela = resultado.toString(); // Exibe o resultado na tela
    atualizarTela();
    operador = ''; // Reseta o operador
    primeiroValor = ''; // Reseta o primeiro valor
}

// Eventos para os números
digito0.addEventListener("click", () => inserirNumero('0'));
digito1.addEventListener("click", () => inserirNumero('1'));
digito2.addEventListener("click", () => inserirNumero('2'));
digito3.addEventListener("click", () => inserirNumero('3'));
digito4.addEventListener("click", () => inserirNumero('4'));
digito5.addEventListener("click", () => inserirNumero('5'));
digito6.addEventListener("click", () => inserirNumero('6'));
digito7.addEventListener("click", () => inserirNumero('7'));
digito8.addEventListener("click", () => inserirNumero('8'));
digito9.addEventListener("click", () => inserirNumero('9'));

// Eventos para os operadores
soma.addEventListener("click", () => escolherOperador('+'));
sub.addEventListener("click", () => escolherOperador('-'));
mult.addEventListener("click", () => escolherOperador('*'));
divi.addEventListener("click", () => escolherOperador('/'));
porcen.addEventListener("click", () => escolherOperador('%'));

limpar.addEventListener("click", () => limparTela())

// Evento para o "=" (calcular)
igual.addEventListener("click", calcular);

function limparTela() {
    valorTela = ''; // Reseta o valor da tela
    primeiroValor = ''; // Reseta o primeiro valor
    operador = ''; // Reseta o operador
    atualizarTela(); // Atualiza a tela
}