"use strict"

var mm = 1;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;
const MM = document.getElementById('mm');
const inputTexto = document.getElementById('inputTexto');
const texto = document.getElementById('texto');
const counter = document.getElementById('counter');


function doChanges() {
    MM.value = Number(MM.value);
    if (iniciou) {
        mm = MM.value || 0;
        if (ss < 0) {
            ss = 0;
        }
        counter.innerText = (MM.value || 0) + ':' + (ss < 10 ? '0' + ss : ss);
        texto.innerText = inputTexto.value;
        texto.style.color = '#212529';
        counter.style.color = '#212529';
    }
}

MM.addEventListener("change", () => {
    doChanges();
});

MM.addEventListener("change", () => {
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
        texto.innerHTML = inputTexto.value;
    }
}

function reset() {
    stop();
    texto.innerHTML = 'Tempo Esgotado';
    iniciou = true;
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);

    mm = MM.value || 0
    ss = 0;

    counter.innerText = (MM.value || 0) + ':' + (ss < 10 ? '0' + ss : ss);
}

//Faz a contagem do tempo e exibição
function timer() {
    if (ss <= 10 && mm <= 0) {

        counter.style.color = 'red';
    }
    if (ss <= 0) { //Verifica se deu 59 segundos
        ss = 59; //Volta os segundos para 0
        mm--; //Adiciona +1 na variável mm

        if (mm < 0) { //Verifica se deu 59 minutos
            MM.value = 0;
            texto.style.color = 'red';
            reset();
        }


    }

    //Cria uma variável com o valor tratado MM:SS
    var format = mm + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    counter.innerText = format;


    ss--; //Incrementa +1 na variável ss

    //Retorna o valor tratado
    return format;
}