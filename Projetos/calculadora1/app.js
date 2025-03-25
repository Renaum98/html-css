const calcular = document.getElementById('botao_calcular');
const limpar = document.getElementById('botao_limpar');
const resultadoTela = document.getElementById('resultado');

calcular.addEventListener('click', () => {
    let resultado = 0;
    let primeiroNumero = parseFloat(document.getElementById('n1_id').value);
    let segundoNumero = parseFloat(document.getElementById('n2_id').value);
    const operador = document.getElementById('operador_id').value;

    // Verifica se os valores são números válidos e define como 0 se não forem
    if (isNaN(primeiroNumero)) {
        primeiroNumero = 0;
    }
    if (isNaN(segundoNumero)) {
        segundoNumero = 0;
    }

    switch (operador) {
        case '+':
            resultado = primeiroNumero + segundoNumero;
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero;
            break;
        case '*':
            resultado = primeiroNumero * segundoNumero;
            break;
        case '/':
            if (segundoNumero === 0) {
                resultadoTela.innerText = 'Não é possível dividir por 0';
                return;
            } else {
                resultado = primeiroNumero / segundoNumero;
                resultadoTela.innerText = `O resultado da operação é ${resultado.toFixed(1)}`;
                return;
            }
        default:
            resultadoTela.innerText = 'Selecione um operador válido!';
            return;
    }

    // Exibe o resultado
    resultadoTela.innerHTML = `O resultado da operação é <strong>${resultado}</strong>`;
});

limpar.addEventListener('click', () => {
    document.getElementById('n1_id').value = '';
    document.getElementById('n2_id').value = '';
    resultadoTela.innerText = ''; // Limpa o resultado
});