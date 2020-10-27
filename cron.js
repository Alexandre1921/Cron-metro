"use strict"

var mm = 0;
var ss = 5;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;
const MM = document.getElementById('mm');
const SS = document.getElementById('ss');
    
MM.addEventListener("keyup", ()=>{ mm=MM.value  });
SS.addEventListener("keyup", ()=>{ ss=SS.value });

var iniciou=true;
//Inicia o temporizador
function start() {
    if (iniciou){
        cron = setInterval(() => { timer(); }, tempo);
    }
    iniciou=false;
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    iniciou=true;
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);

    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss--; //Incrementa +1 na variável ss

    if (ss <= 0) { //Verifica se deu 59 segundos
        ss = 59; //Volta os segundos para 0
        mm--; //Adiciona +1 na variável mm

        if (mm <= 0) { //Verifica se deu 59 minutos
            mm = 59;//Volta os minutos para 0
            stop();
        }
    }

    //Cria uma variável com o valor tratado MM:SS
    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}