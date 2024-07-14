const Movimentos = document.querySelectorAll(".container_movimento div")
const primeiroMovimento = 0
const ultimoMovimento = Movimentos.length - 1

let movimentoAtivo = 0

const movimentoAnterior = () => {

    Movimentos[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== primeiroMovimento) {
        movimentoAtivo = movimentoAtivo - 1
    } else {
        movimentoAtivo = ultimoMovimento
    }
    Movimentos[movimentoAtivo].classList.add("ativo")
}

const proximoMovimento = () => {
    Movimentos[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== ultimoMovimento) {
        movimentoAtivo = movimentoAtivo + 1
    } else {
        movimentoAtivo = primeiroMovimento
    }
    Movimentos[movimentoAtivo].classList.add("ativo")
}

setInterval(() => { proximoMovimento(1) }, 1000);