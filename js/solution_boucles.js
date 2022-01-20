// Exercice 1
let nombre = prompt("Entrez le nombre");
somme = 0;

for (let i = 1; i <= nombre; i++) {
  somme = somme + i; //somme +=i;
}
console.log("la somme est de  : " + somme);
document.write("la somme est de  : " + somme);

// Exercice 2
let nombre2 = parseInt(prompt("Entrez le nombre pour la table de multi"));
limite = 10;

document.write("Table de multiplication de : " + nombre2 + "<br>");
for (let j = 0; j <= limite; j++) {
  document.write(nombre2 + " x " + j + " = " + nombre2 * j + "<br>");
}
// Utilisation des boucles imbriquées
let nombre3 = parseInt(prompt("Entrez le nombre pour la table de multi"));
limite = 5;
for (let j = 0; j <= limite; j++ /* j = j+1 */) {
  document.write("Table de multiplication de : " + (nombre2 + 1) + "<br>");
  nombre2 = nombre2 + 1;
  for (let k = 0; k <= limite; k++) {
    document.write(nombre2 + " x " + k + " = " + nombre2 * k + "<br>");
  }
}
// Exercice 3
document.write("<br> Exercice 3 :");

let nombre4 = parseInt(prompt("Entrez le nombre"));

for (let i = 1; i <= 10; i++) {
  document.write("<br>" + (nombre4 + i));
}
// Exercice 4
