var listaFrutas = []
var listaVerduras = []
var listaLaticinios = []
var listaCongelados = []
var listaDoces = []
var listaMassas = []

var continuar = prompt("Você deseja adicionar alguma comida na sua lista de compras?\nDigite: 1- SIM ou 2-NÃO.")
do {
    if (continuar == 1) {
        const comida = prompt("Qual comida você deseja adicionar à lista?")
        const tipoComida = prompt("Em qual categoria essa comida se encaixa?\n Digite:\n1- Frutas;\n2- Verduras;\n 3-Laticínios;\n4-Congelados;\n5-Doces;\n6- Massas.")
        if (tipoComida == 1) {
            listaFrutas.push(comida)
        }else if (tipoComida ==2) {
            listaVerduras.push(comida)
        }else if (tipoComida ==3) {
            listaLaticinios.push(comida)
        }
        else if (tipoComida ==4) {
            listaCongelados.push(comida)
        }
        else if (tipoComida ==5) {
            listaDoces.push(comida)
        }
        else if (tipoComida ==6) {
            listaMassas.push(comida)
        }
        var continuar = prompt("Você ainda deseja adicionar mais alguma comida na sua lista de compras?\nDigite: 1-SIM ou 2-NÃO.")
    }else {
        alert("Você não adicionou nenhum item à sua lista de comida! Até a próxima!!")
    }
}while(continuar ==1 )
alert(`Lista de Compras:\nFrutas: ${listaFrutas};\nVerduras: ${listaVerduras};\nLaticinios: ${listaLaticinios};\nCongelados: ${listaCongelados};\nDoces: ${listaDoces};\nMassas: ${listaMassas}.`)
alert("Até a próxima!!")