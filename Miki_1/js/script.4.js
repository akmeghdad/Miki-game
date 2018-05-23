"use strict";

var x;
var y;
var z;

x = window.prompt("Prémier nombre");
y = window.prompt("Deuxiem nombre")

// x = parseInt(x); // "5.3" => 5
// y = parseInt(y); // "8.14" => 8

x = parseFloat(x); // "5.3" => 5.3
y = parseFloat(y); // "8.14" => 8.14

z = x + y;

document.write("L'addition: <p>" + x +" + " + y + " = " + z + "</p>");
