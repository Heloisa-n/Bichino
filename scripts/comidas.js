const comidas = document.querySelectorAll(".container_comidas div")
const btnVoltar = document.querySelector(".btn_esc")
const primeiroMovimento = 0
const ultimoMovimento = comidas.length - 1

let comidaAtiva = 0

const comidaAnterior = () => {

    comidas[comidaAtiva].classList.remove("ativo")


    if (comidaAtiva !== primeiroMovimento) {
        comidaAtiva = comidaAtiva - 1
    } else {
        comidaAtiva = ultimoMovimento
    }
    comidas[comidaAtiva].classList.add("ativo")
}

const proximaComida = () => {
    comidas[comidaAtiva].classList.remove("ativo")


    if (comidaAtiva !== ultimoMovimento) {
        comidaAtiva = comidaAtiva + 1
    } else {
        comidaAtiva = primeiroMovimento
    }
    comidas[comidaAtiva].classList.add("ativo")
}

function selecionarComida() {
    comidaAnterior()
    proximaComida()

    if (comidaAtiva === 0) {
        console.log("ok")
    }
    if (comidaAtiva === 1) {
        console.log("ok")
    }
    if (comidaAtiva === 2) {
        console.log("ok")
    }
    if (comidaAtiva === 3) {
        console.log("ok")
    }
    if (comidaAtiva === 4) {
        console.log("ok")
    }
    if (comidaAtiva === 5) {
        console.log("ok")
    }
    if (comidaAtiva === 6) {
        console.log("ok")
    }
}

