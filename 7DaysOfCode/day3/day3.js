function verificar() {
    const escolha = document.getElementsByName('area');
    const perguntaAtual = document.getElementById('pergunta-atual');
    if (escolha[0].checked) {
        const input1 = document.getElementById('front');
        
        perguntaAtual.innerHTML = "Você quer aprender React ou Vue?";
        input1.setAttribute('id', 'react');
        
    } else if (escolha[1].checked) {
        alert("Você escolheu Back!")
    }
}