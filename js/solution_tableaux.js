// Exercice 1 : initialisation du tableau avec des zéro
function initTabByZero(tabEnt) {
  for (let i = 0; i < 7; i++) {
    tabEnt.push(0);
  }
}
let tab = new Array();
initTabByZero(tab);
for (let i = 0; i < tab.length; i++) {
  document.write(tab[i] + " <br>");
}

// function initTabByZero2() {
//   let tabEnt = new Array();
//   for (let i = 0; i < 7; i++) {
//     tabEnt.push(0);
//   }
//   return tabEnt;
// }
// let tab2 = initTabByZero2();
// //   console.log(tab2);  // [0,0,0,0,0,0,0]

// for (let i = 0; i < tab2.length; i++) {
//   document.write(tab2[i] + " <br>");
// }

// Exercice 2
function initTabByUser() {
  // Déclaration du tableau en local
  let tab = new Array();
  //parcours du tableau pour initialisation avec valeur renseignée par l'utilisateur
  for (let i = 0; i < 9; i++) {
    tab.push(parseInt(prompt("Entrez une valeur numérique ")));
  }
  //retourner le tableau de valeur
  return tab;
}
let tabEntier = initTabByUser();
for (let i = 0; i < tabEntier.length; i++) {
  document.write(tabEntier[i] + "<br>");
}

// Exercice 3
function sommeElementTab(tabElt) {
  let somme = 0;
  for (let i = 0; i < tabElt.length; i++) {
    somme = somme + tabElt[i];
  }
  return somme;
}
// Récupération de la valeur retournée par la fonction
let som = sommeElementTab(tabEntier);
document.write("<br> Somme est de : " + som);

// Exercice 4
function maxTab(tabElt) {
  let max = tabElt[0];
  for (let i = 1; i < tabElt.length; i++) {
    if (tabElt[i] > max) {
      max = tabElt[i];
    }
  }
  return max;
}
// Récupération de la valeur retournée par la fonction maxTab
let max = maxTab(tabEntier);
document.write("<br> le Max est de : " + max);

// Exercice 5 : Strictement croissant
function strictementCroissant(tabEnt) {
  for (let i = 0; i < tabEnt.length - 1; i++) {
    if (tabEnt[i + 1] < tabEnt[i]) {
      return false;
    }
  }
  return true;
}
// Récupération de la valeur retournée par la fonction strictementCroissant
let estOrdonne = strictementCroissant(tabEntier);
document.write("<br> tableau ordonné ?  " + estOrdonne);
