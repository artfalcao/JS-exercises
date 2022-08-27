//OBJETIVO AULA 6: Implementar opção de remover item da lista de compras, colocando junto com a opção de add item na lista de compra.


var listaFrutas = []
var listaVerduras = []
var listaLaticinios = []
var listaCongelados = []
var listaDoces = []
var listaMassas = []

var listaComidas = [listaFrutas, listaVerduras, listaLaticinios, listaCongelados, listaDoces, listaMassas]

// INICIANDO O PROGRAMA
var continuar = prompt("Você deseja adicionar alguma comida na sua lista de compras?\nDigite: 1- SIM ou 2-NÃO.")

//ADICIONANDO OS ITENS
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
        var continuar = prompt("Você deseja adicionar ou remover algum item na sua lista de compras?\nDigite: 1-DESEJO ADICIONAR\n2-DESEJO REMOVER\n3-ESTOU SATISFEITO!.")
    }else {
        alert("Você não adicionou nenhum item à sua lista de comida! Até a próxima!!")
    }
}while(continuar ==1 )

//REMOVENDO OS ITENS
while (continuar ==2) {
    
    let qualItemRemover = prompt("Qual item você deseja remover?");

    for(let i = 0; i<=listaComidas.length; i++) {
        
        let localComida = listaComidas[i].indexOf(qualItemRemover.toString())
        if (localComida == -1) {
            alert(`Não achei seu item na lista ${i}`)
        }else {
            alert(`Achei seu item no índice ${localComida} na lista ${i}`)
        }

    } 

    var continuar = prompt("Você deseja adicionar ou remover algum item na sua lista de compras?\nDigite: 1-DESEJO ADICIONAR\n2-DESEJO REMOVER\n3-ESTOU SATISFEITO!.")
};


alert(`Lista de Compras:\nFrutas: ${listaFrutas};\nVerduras: ${listaVerduras};\nLaticinios: ${listaLaticinios};\nCongelados: ${listaCongelados};\nDoces: ${listaDoces};\nMassas: ${listaMassas}.`)
alert("Até a próxima!!")

