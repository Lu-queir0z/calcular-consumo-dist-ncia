let tempo;
let velocidade;
let distancia;
let consumo;
let resultado01;
let resultado02;

function calcular(){

    document.querySelector('')

}

function distancia(){
    //entrada de tempo
        tempo = parseInt(document.querySelector('#tempo').value);
    //entrada de distancia
        velocidade = parseInt(document.querySelector('#velocidade').value);
    //processamento
        resultado = tempo * velocidade;
    //saida
        document.querySelector('#resultado-distancia').innerHTML = resultado01;
    }
    function consumo(){
    //entrada de tempo
        tempo = parseInt(document.querySelector('#tempo').value);
    //entrada de distancia
        velocidade = parseInt(document.querySelector('#velocidade').value);
    //processamento 
        resultado = distancia /12;
    //saida
        document.querySelector('#resultado-consumo').innerHTML = resultado02;
    }