const btnEnter = document.querySelector(".btn_enter")

const icone = document.querySelectorAll(".menu_baixo div")
const primeiroIcone = 0
const ultimoIcone = icone.length - 1
let iconeAtivo = 0

const slideAnterior = () => {

    icone[iconeAtivo].classList.remove("ativo")

    if (iconeAtivo !== primeiroIcone) {
        iconeAtivo = iconeAtivo - 1
    } else {
        iconeAtivo = ultimoIcone
    }
    icone[iconeAtivo].classList.add("ativo")
}

const proximoSlide = () => {
    icone[iconeAtivo].classList.remove("ativo")

    if (iconeAtivo !== ultimoIcone) {
        iconeAtivo = iconeAtivo + 1
    } else {
        iconeAtivo = primeiroIcone
    }
    icone[iconeAtivo].classList.add("ativo")
}

function enter() {
    slideAnterior()
    proximoSlide()

    if (iconeAtivo === 0) {
        document.getElementById("icone_comidas").click()
    }

    if (iconeAtivo === 1) {

        document.getElementById("icone_suco").click()

    }

    if (iconeAtivo === 2) {
        document.getElementById("icone_estudo").click()
    }

    if (iconeAtivo === 3) {
        document.getElementById("icone_carinho").click()
    }

}






