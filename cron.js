"use strict"

var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;
const MM = document.getElementById('mm');
const inputTexto = document.getElementById('inputTexto');
const texto = document.getElementById('texto');


function doChanges() {
    if (iniciou) {
        mm = MM.value || 0;
        if (ss < 0) {
            ss = 0;
        }
        document.getElementById('counter').innerText = (MM.value || 0) + ':' + (ss < 10 ? '0' + ss : ss);
        document.getElementById('texto').innerText = inputTexto.value;
    }
}

MM.addEventListener("keyup", () => {
    doChanges();
});

MM.addEventListener("keydown", () => {
    doChanges();
});

inputTexto.addEventListener("keyup", () => {
    doChanges();
});

inputTexto.addEventListener("keydown", () => {
    doChanges();
});

var iniciou = true;
//Inicia o temporizador
function start() {
    if (iniciou) {
        iniciou = false;
        cron = setInterval(() => { timer(); }, tempo);
    }
}

function reset() {
    stop();
    iniciou = true;
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);

    mm = MM.value || 0
    ss = 0;

    document.getElementById('counter').innerText = (MM.value || 0) + ':' + (ss < 10 ? '0' + ss : ss);
}

//Faz a contagem do tempo e exibição
function timer() {
    if (ss <= 0) { //Verifica se deu 59 segundos
        ss = 59; //Volta os segundos para 0
        mm--; //Adiciona +1 na variável mm

        if (mm < 0) { //Verifica se deu 59 minutos
            console.log('b');
            MM.value = 0;
            reset();
        }

    }

    //Cria uma variável com o valor tratado MM:SS
    var format = mm + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;


    ss--; //Incrementa +1 na variável ss

    //Retorna o valor tratado
    return format;
}