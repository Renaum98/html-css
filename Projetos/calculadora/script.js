const digito1 = document.getElementById("dg1")
const digito1Valor = document.getElementById("dg1").value
const telaConteudo = document.getElementById("tela-conteudo")

function clicar(botao,valor){
    telaConteudo.innerHTML = valor
}

digito1.addEventListener("click", () => {
    clicar(digito1,digito1Valor)
})