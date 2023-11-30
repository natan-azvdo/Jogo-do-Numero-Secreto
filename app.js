////SUBSTITUÍDOS PELO CÓDIGO DALINHA 9 A 15:
////let titulo = document.querySelector('h1');
////titulo.innerHTML = 'Jogo do número secreto';
////let paragrafo = document.querySelector('p');
////paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:'); 
};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};




//ATIVIDADES - AULA 2:

//function exibirMensagemNoConsole() {
   //console.log ('Olá, mundo!');
//}
//exibirMensagemNoConsole();
//function exibirNome(nome) {
    //console.log (`Olá, ${nome}!`);
    //alert (`Olá, ${nome}!`)
//}
//exibirNome('Natan');


//function calcularDobro(numero) {
    //return numero * 2;
//}
//let resultado = calcularDobro(6);
//console.log(resultado);


//function calcularMedia(a, b, c) {
    //return (a + b + c) / 3;
//}
//let resultado = calcularMedia(5, 10, 15);
//console.log(resultado);


//function maiorNumero (a, b) {
    //return a > b ? a : b;
//}
//let resultado = maiorNumero(10, 50);
//console.log(resultado);


//function umNumero (numero) {
    //return numero * numero;
//}
//let resultado = umNumero(7);
//console.log (resultado);


//ATIVIDADES - AULA 3:

//function calcularImc(altura, peso) {
    //let imc = peso / (altura * altura);
    //alert (`O seu IMC é ${imc}.`);
//}
//calcularImc (1.62, 64.7);


//function calcularFatorial(numero) {
    //if (numero === 0 || numero === 1) {
      //return 1;
    //}
    //let fatorial = 1;
    //for (let i = 2; i <= numero; i++) {
      //fatorial *= i;
    //}
    //return fatorial;
  //}
  //// Exemplo de uso
  //let numero = 5;
  //let resultado = calcularFatorial(numero);
  //console.log(`O fatorial de ${numero} é ${resultado}`);
  //alert(`O fatorial de ${numero} é ${resultado}`);


//function converterDolarParaReal(valorEmDolar) {
    //let cotacaoDolar = 4.80;
    //let valorEmReais = valorEmDolar * cotacaoDolar;
    //return valorEmReais.toFixed(2);
  //}
  //// Exemplo de uso
  //let valorEmDolar = 10;
  //let valorEmReais = converterDolarParaReal(valorEmDolar);
  //console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
  //alert(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);


  //function calcularAreaPerimetroSalaRetangular(altura, largura) {
    //let area = altura * largura;
    //let perimetro = 2 * (altura + largura);
    //console.log(`Área da sala: ${area} metros quadrados`);
    //console.log(`Perímetro da sala: ${perimetro} metros`);
  //}
  //// Exemplo de uso
  //let altura = 3; // em metros
  //let largura = 5; // em metros
  //calcularAreaPerimetroSalaRetangular(altura, largura);


  //function calcularAreaPerimetroSalaCircular(raio) {
    //let area = Math.PI * raio * raio;
    //let perimetro = 2 * Math.PI * raio;
    //console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    //console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  //}
  //// Exemplo de uso
  //let raio = 4; // em metros
  //calcularAreaPerimetroSalaCircular(raio);


  //function mostrarTabuada(numero) {
    //for (let i = 1; i <= 10; i++) {
      //let resultado = numero * i;
      //console.log(`${numero} x ${i} = ${resultado}`);
    //}
  //}
  //// Exemplo de uso
  //let numero = 7;
  //mostrarTabuada(numero);


  //ATIVIDADES - AULA 4:

  //let listaGenerica [];


  //let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


  //let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
  //linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');


  //let listaNomes = ['Natan', 'Duda', 'Ziggy'];
  //console.log (listaNomes [0]);


  //let listaNomes = ['Natan', 'Duda', 'Ziggy'];
  //console.log (listaNomes [1]);


  //let listaNomes = ['Natan', 'Duda', 'Ziggy'];
  //console.log (listaNomes [2]);












