"use strict";

var jours =["lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samdi", "Dimanche"];

jours[5] = window.prompt("Quel nom pour le "+jours[5])

document.write('<p>'+jours[0]+'.......'+jours[2]+'.....'+jours[4]+'</p>'+ '<p>'+jours[1]+'.....'+jours[3]+'............'+jours[5]+'</p>');