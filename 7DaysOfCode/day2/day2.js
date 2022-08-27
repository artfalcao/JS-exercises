function enviarDados() {
    const nome = document.getElementById('nome').value
    const idade = Number(document.getElementById('idade').value)
    const linguagem = document.getElementById('linguagem').value
    const resp = document.getElementById('resposta')
    
    resp.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

    const gosto = prompt (`${nome}, você está gostando de estudar ${linguagem}?\nDigite 1 para SIM ou 2 para NÃO.`)
    if (gosto == 1) {
        alert("Que massa! Continue estudando que você terá muito sucesso!")
    } else if (gosto ==2) {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}


