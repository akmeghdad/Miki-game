"use strict";
var flow = 0;
var num = 5;
var top1 = parseInt((Math.random()*1000)-150);
var left1 = parseInt((Math.random()*1000)-150);

top1 = top1<0 ? 0 : top1;
left1 = left1<0 ? 0 : left1;

var mikiposition = document.querySelector(".miki");
// console.log(mikiposition);

mikiposition.innerHTML = '<img id="mikimg" src="img/mikki.jpg" alt="mikki" style="top: '+top1+'px;left: '+left1+'px;">';

var mikiposition = document.querySelector(".miki");
mikiposition.addEventListener("mouseover",changePosition)

var mikiposition1 = document.querySelector("img");
// console.log(mikiposition1);

mikiposition1.addEventListener("click",clicked)

function changePosition() {
    var top1 = parseInt((Math.random()*1000)-150);
    var left1 = parseInt((Math.random()*1000)-150);

    top1 = top1<0 ? 0 : top1;
    left1 = left1<0 ? 0 : left1;

    if (flow < num) {
        this.innerHTML = '<img id="mikimg" src="img/mikki.jpg" alt="mikki" style="top: '+top1+'px;left: '+left1+'px;">';
        flow++;
        
    }

    var sp = document.querySelector("aside p span");
    // console.log(sp);
    sp.textContent = flow;

}

function clicked() {
    window.alert("Tu as gagné !!!!!!!!!!!!")
}
