// window.prompt("XXXX");

var pnom = window.prompt("Quel est ton prénom?");
var nom = window.prompt("Quel est ton Nom");
var ag = window.prompt("Quel age as-tu?");

var show = 'Salut '+ pnom + ' ' + nom + '<br> tu est ' + ag + ' ans';
document.write();
console.log(show);


var ag = window.prompt("Quel age as-tu?"); //ag = 62
ag = parseInt(ag); // mieux solution

var ag10 =  ag +10; // alert: 6210
// var ag10 = parseInt( ag) +10; // alert: 72
var show = 'Bonjour, '+'<p> tu as ' + ag + ' ans</p>';

document.write('Bonjour, '+'<p> Tu as ' + ag + ' ans</p>');
document.write('Dans 10 ans tu auras '+ag10+" ans")

console.log(show);

// solution 1, la mieux
var age;
age = window.prompt("quel est ton age ?");
age = parseInt(age);

document.write("<p> Bonjour, tu as " + age + " ans </p>");

var ageNext;
ageNext = age + 10;

document.write("<p> dans 10ans tu aura : " + ageNext + " !");



// solution 2
var age;
age = window.prompt("quel est ton age ?");

document.write("<p> Bonjour, tu as " + age + " ans </p>");

var ageNext;
ageNext = parseInt(age) + 10;

document.write("<p> dans 10ans tu aura : " + ageNext + " !");