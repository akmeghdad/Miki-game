"use strict";

// Mon code
var prixHT;
const TVA = 0.2;
var prixTTC;

prixHT = window.prompt("Le priprixHT");

prixHT = parseFloat(prixHT);

prixTTC = prixHT + (prixHT * TVA);

document.write("Le tauprixHT de TVA: <p>" + prixTTC + "</p>");



// Coriger
// Mes variables.
const TAUX_DE_TVA = 0.2;
var montantHT;
var montantTTC;
var montantTVA;

// Demande le montant HT à l'utilisateur.
montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);

// Calcul du montant de TVA et du montant TTC final.
montantTVA = montantHT * TAUX_DE_TVA;
montantTTC = montantHT + montantTVA;

// Affichage
document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');
