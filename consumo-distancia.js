let tempo;
let velocidade;
let distanciapercorrida;
let consumo;
let resultado01;
let resultado02;

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
        resultado = distanciapercorrida /12;
    //saida
        document.querySelector('#resultado-consumo').innerHTML = resultado02;
    }

function calcular(){

    resultado = tempo * velocidade;
    document.querySelector('#resultado-ditancia').innerHTML = resultado01;
    distancia();

    resultado = distanciapercorrida /12;
    document.querySelector('#resultado-consumo').innerHTML = resultado02;
    consumo();

}
    