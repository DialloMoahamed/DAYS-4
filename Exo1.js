// // Reponse numero 1
// let premier = prompt("Enter your age:");
// if (premier >= 18) {
//     alert("You are old enough to drive.")
// } else {
//     alert("You are left years to drive.")
// }


// Reponse numero 2

let myAge = prompt("Enter my age:") 
let yourAge = prompt("Enter your age:") 
myAge = parseInt(myAge);
yourAge = parseInt(yourAge)
if (myAge > yourAge) {
    console.log("I am  " ,myAge - yourAge, "years older than you");
}else {
    console.log("you are " , yourAge - myAge, "years older than me");
}


// Reponse numero 3
let a = 9;
let b = 3;
if (a > b){
    console.log("a est supérieur à b"); 

} else {
    console.log("a est inférieur à b "); 
}


// Reponse numero 4
let num = prompt("Enter a number");
num = parseInt(num)
if (num % 2 === 0){
    console.log(num + ' est paire')
} else{
    console.log(num + ' est impaire');
}
