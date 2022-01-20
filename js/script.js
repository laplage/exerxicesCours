// // // //         // Les condition
// // // // let age = 15;
// // // //     if( age < 0){
// // // //         console.log("Age invalide");
// // // //     }else{
// // // //         console.log("Age valide");
// // // //     }

// // // // /*
// // // //     condition ? valeur respecté : cas contraire
// // // // */
// // // //     age < 0  ? console.log("Age invalids") : console.log("Age valide");
// // // //     (age < 18 && age > 0 ) ? console.log("Vous êtes Mineur") : console.log("Majeur");

// // // //     if( age < 0 ){
// // // //         console.log("Age invalide") ;
// // // //     }else if(age<18 && age > 0){
// // // //         console.log("Vous êtes Mineur");
// // // //     }else{
// // // //         console.log("Vous êtes Majeur");
// // // //     }

// // // //     // Switch case
// // // //     let jour = 2;
// // // //         switch (jour){
// // // //             case 1 :
// // // //                     console.log("Lundi");
// // // //                      break;
// // // //             case 2 :
// // // //                     console.log("Mardi");
// // // //                      break;
// // // //             case 3 :
// // // //                     console.log("Mercredi");
// // // //                     // break;
// // // //             case 4 :
// // // //                     console.log("Jeudi");
// // // //                     // break;
// // // //             case 5 :
// // // //                     console.log("Vendredi");
// // // //                     // break;
// // // //             case 6 :
// // // //                     console.log("Samedi");
// // // //                     // break;
// // // //             case 7 :
// // // //                     console.log("Dimanche");
// // // //                      break;
// // // //             default :
// // // //                 console.log("Mauvaise Valeur");
// // // //         }
// // // // Les différentes boucles

// // // // // Test de la boucle for
// // // // for (let i = 0, j = 0; i < 10 || j < 9; i++, j++) {
// // // //   console.log("Bonjour Mr " + (i + 1));
// // // // }

// // // // let compteur = 1;
// // // // // Test de la boucle While
// // // // while (compteur < 15) {
// // // //   console.log("Bonjour Mme " + compteur);
// // // //   compteur += 1;
// // // // }
// // // // // Test de la boucle for avec double condition
// // // // let b = false;
// // // // for (let i = 0, j = 0; i < 10 && b == false; i++, j++) {
// // // //   if (j == 3) {
// // // //     b = true;
// // // //   }
// // // //   console.log("Bonjour Mlle " + (j + 1));
// // // // }
// // // // // Test de la boucle do while
// // // // var somme = 0;

// // // // do {
// // // //   console.log("Bonjour  X " + somme);
// // // //   somme = somme + 1;
// // // // } while (somme < 10);

// // // //  Exemple d'imbrication des boucles

// // // for (let i = 0; i < 2; i++) {
// // //   for (let j = 0; j < 10; j++) {
// // //     if (i == 0) {
// // //       console.log("Bonjour Mr " + (j + 1));
// // //     } else {
// // //       console.log("Bonjour Mme " + (j + 1));
// // //     }
// // //   }
// // // }
// // // les fonctions
// // // Fonction sans paramètres
// // function maFonction() {
// //   let a = 5,
// //     b;
// //   document.write(" <br> Bonjour, la valeur de a = " + a);
// // }
// // // Fonctions avec paramètres
// // function maFonctionAvecParam(a, b) {
// //   document.write("<br> Bonjour, la valeur de a =" + a);
// // }
// // //  fonction sans paramètres avec retour de résultat
// // function maFonctionSansParam() {
// //   let a = 5;
// //   return a;
// // }
// // // fonction avec paramètres et retour de resultat
// // function maFonctionAvacParamEtRetour(a, b) {
// //   let sommme = a + b;
// //   return sommme;
// // }
// // // Faire appel a une fonction
// // // maFonction();
// // // let x = 5,
// // //   y = 6;
// // // maFonctionAvecParam(x, y);
// // // maFonctionAvecParam(15, 25);

// // document.write(maFonctionSansParam());

// // let valeur = maFonctionSansParam();

// // alert(valeur);

// // document.write("<br>" + maFonctionAvacParamEtRetour(15, 15));

// // Déclaration des fonctions anonymes

// // function(){
// //     alert('Je suis une fonction anonyme');
// // }
// //Appel via une variable
// // let anonyme = function () {
// //   alert("Je suis une fonction anonyme");
// // };
// // anonyme();
// // // Auto-exécution d'une fonction
// // (function () {
// //   document.write("Je suis une fonction anonyme invoquée automatiquement");
// // })();

// // (function bonjour() {
// //   document.write("<br> Bonjour à tous !");
// // })();

// /*  Les Tableaux à une dimension
//   1-  Déclaration
//   2-  initialisation de tableaux

// */
// // Déclaration de tableaux
// // let tab1 = [];
// // let tab2;
// // var tab3 = new Array();
// // //  initialisation de tableaux
// // let tab4 = ["Lisa", "Bart", "Omer"];
// // let tab5 = [1, 2, 3, 4, 6, 8];
// // let tab6 = new Array(12, 15, "Francis");
// // // Accès a un élement du tableau via son index
// // tab5[2]; // valeur = 3
// // tab4[1]; // valeur = Bart
// // // Modification d'un élément du tableau
// // tab4[1] = "Francis";
// // //  Parcours d'un tableau avec for
// // for (let i = 0; i < tab5.length; i = i + 1) {
// //   document.write(tab5[i] + "<br>");
// // }
// // // Parcours d'un tableau avec for in
// // for (let valeur in tab4) {
// //   document.write(valeur + "<br>");
// // }
// // // méthodes de gestion de tableau : push() / pop()
// // tab5.push(45);

// // tab6.pop();

// /*******************Exemple complet *******************/
// /**
//  *Cette fonction permet d'initialiser le tableau avec 10 nombre
//  */
// function initTab(tabEnt) {
//   for (let i = 0; i < 10; i = i + 1) {
//     tabEnt.push(0);
//   }
// }
// /**
//  * Cette fonction parcours et affiche chaque élément du tableau
//  */
// function afficherTab(tabEnt) {
//   for (let i = 0; i < tabEnt.length; i = i + 1) {
//     document.write("<br>" + "valeur n° " + i + " = " + tabEnt[i]);
//   }
// }
// /**
//  * Cette fonction ajoute un élément à la fin du tableau
//  */
// function addValue(tabEnt, val) {
//   tabEnt.push(val); // push() ajout l'élément en fin de tableau
// }
// /**
//  * Cette fonction supprime le dernier élément dans le tableau
//  */
// function deleteValueEnd(tabEnt) {
//   tabEnt.pop(); // pop supprime le dernier élément dans le tableau
// }
// /**
//  * Cette fonction recherche et supprime un élément dans le tableau.
//  * Elle retourne un booléen vrai si l'élément est supprimé et faux
//  * dans le cas contraire.
//  */
// function deleleValueByIndex(tabEnt, valSup) {
//   let estSuprime = false;
//   for (let i = 0; i < tabEnt.length; i = i + 1) {
//     if (tabEnt[i] == valSup) {
//       tabEnt.splice(i, 1); // splice() supprime un élément en fonction de son index
//       estSuprime = true;
//     }
//   }
//   return estSuprime;
// }
// /**********Test des fonctions de manulaption du tableau*************************/
// let tabE = new Array();

// // Initialisation du tableau avec 10 nombres
// initTab(tabE);
// //  Afficher les éléments du tableau
// afficherTab(tabE);
// // Ajout d'un élément
// let v = "Bonjour";
// // tabE.push(45);
// addValue(tabE, v);
// afficherTab(tabE);
// // Supprimer le dernier élément du tableau
// deleteValueEnd(tabE);
// document.write("<br> new tab after delete end element");
// afficherTab(tabE);
// // supprimer un élément du tableau. 5 par exemple
// let valeur = 5;
// let b = deleleValueByIndex(tabE, valeur);
// document.write("<br> Elément " + valeur + " est supprimé ? " + b + "<br>");
// afficherTab(tabE);

/* Tableaux Multi-dimensionnels (2 dims)
  - Déclaration et création de tableaux
  - initialisation du tableau
  - l'accès à un élément du tableau (cellule)
  - la modification d'un élément du tableau
  - le parcours d'un tableau
*/
// Déclaration + création du tableau
// var tab = new Array(
//   new Array(1, 2, 3),
//   new Array(4, 5, 6, 7, 8, 9),
//   new Array(10, 12)
// );
// var tab1 = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7, 8, 9],
//   [10, 11, 12, 13, 14],
// ];

// var tab2 = new Array();
// tab2 = [
//   ["Bart", "Lisa", "Omer"],
//   ["Lyndsay", "Henry", "Adam"],
// ];
// // Accès à un élément du tableau
// alert(tab[1][3]); //   7
// alert(tab2[0][2]); //   Omer
// alert(tab1[2][2]); //   8
// // Modification d'un élément du tableau
// tab[1][3] = 10;
// // Parcours du tableau Multi-dim
// for (let i = 0; i < tab.length; i++) {
//   for (let j = 0; j < tab[i].length; j++) {
//     document.write(tab[i][j] + " - ");
//   }
//   document.write(" <br> ");
// }

// // Ajout d'un élément dans un sous tableau
// let val = 245; // tab ==> indice 2
// tab[2].push(245);

/*****************Exemple complet
 *      1 2 3
 *      4 5 6
 *      7 8 9
 * *********************************/

function initTabDeuxDim(tabEnt) {
  // let k =1;
  for (let i = 0, k = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabEnt[i][j] = k; //prompt("Entrez une valeur");
      k++;
    }
  }
}
function afficherTabDeuxDim(tabEnt) {
  for (let i = 0, k = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.write(" " + tabEnt[i][j] + " ");
    }
    document.write("<br>");
  }
}
function sommeTabDeuxDim(tabEnt) {
  let somme = 0;
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      somme = somme + tabEnt[i][j];
    }
  }
  return somme;
}

// Test
let tabE = new Array(new Array(), new Array(), new Array());
initTabDeuxDim(tabE);
afficherTabDeuxDim(tabE);

document.write("<br> la somme est de : " + sommeTabDeuxDim(tabE));
