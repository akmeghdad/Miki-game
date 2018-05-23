"use strict";

var tmr; // Timer
var tmrcont = 0; // Timer
var tmrscond = 900; // 0.9 seconde
var etp; // etap
var etpBody; // etap
var etpcont = 1; // etap
var clstmr;
var mikiposition;
var mikipositionID;
var mikitop = getRandom(0,800);
var mikileft = getRandom(0,800);

// tmr = setInterval(fncNext, 1000);
mikipositionID = document.querySelector("#mikimg");
clstmr = document.querySelector(".timer");
etp = document.querySelector(".etap");
etpBody = document.querySelector("body");
mikipositionID.addEventListener("click", fncclick); // ne pas tricher
etpBody.addEventListener("keydown", fncclick);


function start() {
    
    etp.textContent = etpcont;
    tmr = setInterval(fncposition, tmrscond);
}

function fncposition() { // change position
    tmrcont++;
    mikitop = getRandom(0,800);
    mikileft = getRandom(0,800);

    mikipositionID.style = 'top: '+mikitop+'px;left: '+mikileft+'px;';
    console.log(mikileft);
    clstmr.textContent = tmrcont;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fncclick() {
    window.alert("Vous avez Gagné !!!!");
    etpcont++;
    tmrcont =0;
    tmrscond = tmrscond -100;
    
    clearInterval(tmr);
    start();

}

start();














