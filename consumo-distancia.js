
function calcular(){

    let tempo;
    let velocidade;
    let distancia;
    let consumo;
    let resultado01;
    let resultado02;

    //entrada de tempo
        tempo = parseFloat(document.querySelector('#tempo').value);
    //entrada de velocidade
        velocidade = parseFloat(document.querySelector('#velocidade').value);
    //processamento distancia 
        resultado01 = tempo * velocidade;
    //saida
        document.querySelector('#resultado-distancia').innerHTML = resultado01;

    //processamento consumo
        resultado02 = resultado01 / 12;
    //saida
        document.querySelector('#resultado-consumo').innerHTML = resultado02.toFixed(2);

}
function limpar(){

    document.querySelector('#tempo').value = '';
    document.querySelector('#velocidade').value = '';
    document.querySelector('#resultado-distancia').innerHTML = '-';
    document.querySelector('#resultado-consumo').innerHTML  = '-';
    
}