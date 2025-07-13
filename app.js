let lista = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

console.log(numeroSecreto);


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número de 1 á 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
    
        exibirTexto('h1', 'Você acertou!');
        let plural = tentativas > 1 ? 'tentativas' : 'tentaiva';
        let mensagemPlural = `Você acertou com ${tentativas} ${plural}`;
        exibirTexto('p', mensagemPlural);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número é Menor!');
        } else {
            exibirTexto('p', 'O número é Maior!');
        }
    tentativas++
    limparCampo();
    }

}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
    let qntLista = lista.length;

    if (qntLista == numeroLimite){
        lista = [];
    }
    if (lista.includes(numeroAleatorio)){
        gerarNumeroAleatorio();
    } else {
        lista.push(numeroAleatorio);
        console.log(lista);
        return numeroAleatorio;
    }


    return numeroAleatorio;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

// teste 1

 let teste = 1;