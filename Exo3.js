// Demander à l'utilisateur de saisir l'année et le mois
// Demander à l'utilisateur de saisir l'année et le mois
const annee = prompt("Entrez une année (par exemple, 2024) : ");
const mois = prompt("Entrez un mois (0 pour janvier, 11 pour décembre) : ");
let trans = parseInt(annee);
const tableauMois = [{"janvier" : 31},{"fevrier" : 28},{"mars" : 30},{"avril" : 30},{"mai" : 31},{"juin" : 30},{"juillet" : 31},{"août" : 31},{"septembre" : 30},{"octobre" : 31},{"novembre" : 30},{"decembre" : 31}];
if (annee % 4 === 0 && annee % 100 !== 0 && mois === "fevrier") {
    console.log(`Il y a ${tableauMois[1].fevrier + 1} jours en ${mois}/${annee}.`);
} else if (mois === "janvier") {
    console.log(`Il y a ${tableauMois[0].janvier} jours en ${mois}/${annee}.`);
}
 else if (mois === "fevrier") {
    console.log(`Il y a ${tableauMois[1].fevrier} jours en ${mois}/${annee}.`);
}
 else if (mois === "mars") {
    console.log(`Il y a ${tableauMois[2].mars} jours en ${mois}/${annee}.`);
}
 else if (mois === "avril") {
    console.log(`Il y a ${tableauMois[3].avril} jours en ${mois}/${annee}.`);
}
 else if (mois === "mai") {
    console.log(`Il y a ${tableauMois[4].mai} jours en ${mois}/${annee}.`);
}
 else if (mois === "juin") {
    console.log(`Il y a ${tableauMois[5].juin} jours en ${mois}/${annee}.`);
}
 else if (mois === "juillet") {
    console.log(`Il y a ${tableauMois[6].juillet} jours en ${mois}/${annee}.`);
}
 else if (mois === "août") {
    console.log(`Il y a ${tableauMois[7].août} jours en ${mois}/${annee}.`);
}
 else if (mois === "septembre") {
    console.log(`Il y a ${tableauMois[8].septembre} jours en ${mois}/${annee}.`);
}
 else if (mois === "octobre") {
    console.log(`Il y a ${tableauMois[9].octobre} jours en ${mois}/${annee}.`);
}
 else if (mois === "octobre") {
    console.log(`Il y a ${tableauMois[10].octobre} jours en ${mois}/${annee}.`);
}
 else if (mois === "decembre") {
    console.log(`Il y a ${tableauMois[11].decembre} jours en ${mois}/${annee}.`);
} else {
    console.log("Veuiller bien saisir le moi");
}
// Afficher le résultat
