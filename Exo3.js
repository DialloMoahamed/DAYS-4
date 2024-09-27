// Demander à l'utilisateur de saisir l'année et le mois
// Demander à l'utilisateur de saisir l'année et le mois
const annee = prompt("Entrez une année (par exemple, 2024) : ");
const mois = prompt("Entrez un mois (0 pour janvier, 11 pour décembre) : ");
// Créer une date au premier jour du mois suivant
const premierDuMoisSuivant = new Date(annee, mois + 1);
premierDuMoisSuivant.setDate(premierDuMoisSuivant.getDate() - 1);

// Obtenir le nombre de jours du mois
const nombreDeJours = premierDuMoisSuivant.getDate();

// Afficher le résultat
console.log(`Il y a ${nombreDeJours} jours en ${mois}/${annee}.`);