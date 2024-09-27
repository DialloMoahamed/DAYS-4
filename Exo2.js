// Réponse numero 1
let numero = prompt('Enter your note');
if (numero >= 80) {
    console.log("A");
} else if (numero >= 70) {
    console.log("B");
} else if (numero >= 60) {
    console.log("C");
} else if (numero >= 50) {
    console.log("D");
} else {
    console.log("F");
};


// Réponse numero 2
let saison = prompt("Entrer le mois").trim();
const moisAutomne = ["septembre", "octobre", "novembre"];
const moisHiver = ["décembre", "janvier", "février"];
const moisPrintemps = ["mars", "avril", "mai"];
const moisEte = ["juin", "juillet", "août"];

if (moisAutomne.includes(saison)) {
    console.log("La saison est l'automne");
} else if (moisHiver.includes(saison)) {
    console.log("La saison est l'hiver");
} else if (moisPrintemps.includes(saison)) {
    console.log("La saison est le printemps");
} else if (moisEte.includes(saison)) {
    console.log("La saison est l'été");
} else {
    console.log("La valeur mis n'est pas un moi");
}