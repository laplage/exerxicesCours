// // //         // Les condition
// // // let age = 15;
// // //     if( age < 0){
// // //         console.log("Age invalide");
// // //     }else{
// // //         console.log("Age valide");
// // //     }

// // // /*
// // //     condition ? valeur respecté : cas contraire
// // // */
// // //     age < 0  ? console.log("Age invalids") : console.log("Age valide");
// // //     (age < 18 && age > 0 ) ? console.log("Vous êtes Mineur") : console.log("Majeur");

// // //     if( age < 0 ){
// // //         console.log("Age invalide") ;
// // //     }else if(age<18 && age > 0){
// // //         console.log("Vous êtes Mineur");
// // //     }else{
// // //         console.log("Vous êtes Majeur");
// // //     }

// // //     // Switch case
// // //     let jour = 2;
// // //         switch (jour){
// // //             case 1 :
// // //                     console.log("Lundi");
// // //                      break;
// // //             case 2 :
// // //                     console.log("Mardi");
// // //                      break;
// // //             case 3 :
// // //                     console.log("Mercredi");
// // //                     // break;
// // //             case 4 :
// // //                     console.log("Jeudi");
// // //                     // break;
// // //             case 5 :
// // //                     console.log("Vendredi");
// // //                     // break;
// // //             case 6 :
// // //                     console.log("Samedi");
// // //                     // break;
// // //             case 7 :
// // //                     console.log("Dimanche");
// // //                      break;
// // //             default :
// // //                 console.log("Mauvaise Valeur");
// // //         }
// // // Les différentes boucles

// // // // Test de la boucle for
// // // for (let i = 0, j = 0; i < 10 || j < 9; i++, j++) {
// // //   console.log("Bonjour Mr " + (i + 1));
// // // }

// // // let compteur = 1;
// // // // Test de la boucle While
// // // while (compteur < 15) {
// // //   console.log("Bonjour Mme " + compteur);
// // //   compteur += 1;
// // // }
// // // // Test de la boucle for avec double condition
// // // let b = false;
// // // for (let i = 0, j = 0; i < 10 && b == false; i++, j++) {
// // //   if (j == 3) {
// // //     b = true;
// // //   }
// // //   console.log("Bonjour Mlle " + (j + 1));
// // // }
// // // // Test de la boucle do while
// // // var somme = 0;

// // // do {
// // //   console.log("Bonjour  X " + somme);
// // //   somme = somme + 1;
// // // } while (somme < 10);

// // //  Exemple d'imbrication des boucles

// // for (let i = 0; i < 2; i++) {
// //   for (let j = 0; j < 10; j++) {
// //     if (i == 0) {
// //       console.log("Bonjour Mr " + (j + 1));
// //     } else {
// //       console.log("Bonjour Mme " + (j + 1));
// //     }
// //   }
// // }
// // les fonctions
// // Fonction sans paramètres
// function maFonction() {
//   let a = 5,
//     b;
//   document.write(" <br> Bonjour, la valeur de a = " + a);
// }
// // Fonctions avec paramètres
// function maFonctionAvecParam(a, b) {
//   document.write("<br> Bonjour, la valeur de a =" + a);
// }
// //  fonction sans paramètres avec retour de résultat
// function maFonctionSansParam() {
//   let a = 5;
//   return a;
// }
// // fonction avec paramètres et retour de resultat
// function maFonctionAvacParamEtRetour(a, b) {
//   let sommme = a + b;
//   return sommme;
// }
// // Faire appel a une fonction
// // maFonction();
// // let x = 5,
// //   y = 6;
// // maFonctionAvecParam(x, y);
// // maFonctionAvecParam(15, 25);

// document.write(maFonctionSansParam());

// let valeur = maFonctionSansParam();

// alert(valeur);

// document.write("<br>" + maFonctionAvacParamEtRetour(15, 15));

// Déclaration des fonctions anonymes

// function(){
//     alert('Je suis une fonction anonyme');
// }
//Appel via une variable
let anonyme = function () {
  alert("Je suis une fonction anonyme");
};
// anonyme();
// Auto-exécution d'une fonction
(function () {
  document.write("Je suis une fonction anonyme invoquée automatiquement");
})();

(function bonjour() {
  document.write("<br> Bonjour à tous !");
})();

/*  Les Tableaux à une dimension
  1-  Déclaration
  2-  initialisation de tableaux 

*/
// Déclaration de tableaux
let tab1 = [];
let tab2;
var tab3 = new Array();
//  initialisation de tableaux
let tab4 = ["Lisa", "Bart", "Omer"];
let tab5 = [1, 2, 3, 4, 6, 8];
let tab6 = new Array(12, 15, "Francis");
// Accès a un élement du tableau via son index
tab5[2]; // valeur = 3
tab4[1]; // valeur = Bart
// Modification d'un élément du tableau
tab4[1] = "Francis";
//  Parcours d'un tableau avec for
for (let i = 0; i < tab5.length; i = i + 1) {
  document.write(tab5[i] + "<br>");
}
// Parcours d'un tableau avec for in
for (let valeur in tab4) {
  document.write(valeur + "<br>");
}
// méthodes de gestion de tableau : push() / pop()
tab5.push(45);

tab6.pop();