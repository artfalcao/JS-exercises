const area = prompt("Qual área você deseja?\nDigite: 1-FrontEnd ou 2-BackEnd");
if (area==1) {
    const framework = prompt("Qual Framework/Biblioteca você deseja aprender?\nDigite: 1- React ou 2- Vue");
    if (framework == 1) {
        alert("Você irá aprender a biblioteca mais em alta hoje no mercado! Vamos nessa!!");
    }else if (framework ==2) {
        alert("Você irá aprender um dos frameworks mais em alta hoje no mercado! Vamos nessa!!");
    }    
}else if (area ==2) {
    const framework = prompt("Qual Linguagem você deseja aprender?\nDigite: 1- Java ou 2- C#");
    if (framework == 1) {
        alert("Você irá aprender Java! Vamos nessa!!");
    }else if (framework ==2) {
        alert("Você irá aprender C#! Vamos nessa!!"); 
}
}
const futuro = prompt("Digite: \n1- Você deseja se especializar;\n2- Você deseja se desenvolver para Fullstack");
if (futuro ==1 ) {
    alert("Aprimorar nossa habilidades e ser um especialista é fundamental!");
}else if (futuro ==2 ) {
    alert("Ser um desenvolvedor 'Dev em T' é muito importante!");
}
//FALTA FAZER A PARTE QUE FICA REPETINDO A PERGUNTA E ADD OS VALORES DO PROMPT NA LISTA
let tecnologias = [];
let pergunta= prompt("Tem alguma tecnologia que você deseja estudar?");
while(pergunta[0]) {
    pergunta = prompt("Tem mais alguma tecnologia que você deseja estudar?");
    tecnologias.push(pergunta)
}
alert(`Bacana! Você deseja aprender ${tecnologias}`)
