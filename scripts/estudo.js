
const movimentoEstudo = document.querySelectorAll(".container_estudo div")
const primeiroMovimento = 0
const ultimoMovimento = movimentoEstudo.length - 1

let movimentoAtivo = 0

const movimentoAnterior = () => {

    movimentoEstudo[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== primeiroMovimento) {
        movimentoAtivo = movimentoAtivo - 1
    } else {
        movimentoAtivo = ultimoMovimento
    }
    movimentoEstudo[movimentoAtivo].classList.add("ativo")
}

const proximoMovimento = () => {
    movimentoEstudo[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== ultimoMovimento) {
        movimentoAtivo = movimentoAtivo + 1
    } else {
        movimentoAtivo = primeiroMovimento
    }
    movimentoEstudo[movimentoAtivo].classList.add("ativo")
}

setInterval(() => { proximoMovimento(1) }, 2000);
setInterval(() => { window.history.back() }, 9700);

