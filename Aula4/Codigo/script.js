//Iniciando variáveis
var paragrafo =  document.querySelector("p");
var jsRelogio = document.getElementById("relogio");
var jsParandoRelogio = document.getElementById("parandoRelogio");
//Manipulando o tempo
setTimeout(function (){
    paragrafo.innerText = "como você está?";
}, 2000);

var timer = setInterval(function(){
    var data = new Date();
    jsRelogio.innerText = data.toLocaleTimeString();
}, 1000);

setTimeout(function(){
    jsParandoRelogio.innerText = " Ah mas agora eu cansei de contar! ";
    clearInterval(timer)
}, 1000 * 6);