
const MovimentosSuco = document.querySelectorAll(".container_suco div")
const primeiroMovimento = 0
const ultimoMovimento = MovimentosSuco.length - 1

let movimentoAtivo = 0

const movimentoAnterior = () => {

    MovimentosSuco[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== primeiroMovimento) {
        movimentoAtivo = movimentoAtivo - 1
    } else {
        movimentoAtivo = ultimoMovimento
    }
    MovimentosSuco[movimentoAtivo].classList.add("ativo")
}

const proximoMovimento = () => {
    MovimentosSuco[movimentoAtivo].classList.remove("ativo")


    if (movimentoAtivo !== ultimoMovimento) {
        movimentoAtivo = movimentoAtivo + 1
    } else {
        movimentoAtivo = primeiroMovimento
    }
    MovimentosSuco[movimentoAtivo].classList.add("ativo")
}

setInterval(() => { proximoMovimento(1) }, 2000);
setInterval(() => { window.history.back() }, 9700);

