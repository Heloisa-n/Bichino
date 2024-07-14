
const movimentoCarinho = document.querySelectorAll(".container_carinho div")
const primeiroMovimento = 0
const ultimoMovimento = movimentoCarinho.length - 1

let movimentoAtivo = 0

const movimentoAnterior = () => {

    movimentoCarinho[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== primeiroMovimento) {
        movimentoAtivo = movimentoAtivo - 1
    } else {
        movimentoAtivo = ultimoMovimento
    }
    movimentoCarinho[movimentoAtivo].classList.add("ativo")
}

const proximoMovimento = () => {
    movimentoCarinho[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== ultimoMovimento) {
        movimentoAtivo = movimentoAtivo + 1
    } else {
        movimentoAtivo = primeiroMovimento
    }
    movimentoCarinho[movimentoAtivo].classList.add("ativo")
}

setInterval(() => { proximoMovimento(1) }, 2100);
setInterval(() => { window.history.back() }, 4000);

