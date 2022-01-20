// Exercice 1 : Tous positif
function tousPositif(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if (tabEnt[i][j] < 0) {
        return false;
      }
    }
  }
  return true;
}
// Exercice 2 : Somme des éléments impairs
function sommeDesImpairs(tabEnt) {
  let somme = 0;
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if (tabEnt[i][j] % 2 != 0) {
        somme = somme + tabEnt[i][j];
      }
    }
  }
  return somme;
}
// Exercice 3 : Parcours du tableau
function parcoursColonneParColonne(tabEnt) {
  for (let j = 0; j < tabEnt.length; j++) {
    for (let i = 0; i < tab[i].length; i++) {
      document.write(tabEnt[i][j]);
    }
  }
}
// Exercice 4 : A vos pinceaux !
function noirDiagonaleGauche(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if ((i = j)) {
        tabEnt[i][j] = "N";
      }
    }
  }
}
function noirPLigneDLigneEtDg(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if ((i = j) || i == 0 || i == tabEnt.length - 1) {
        tabEnt[i][j] = "N";
      }
    }
  }
}
function noirDiagonaleDroite(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if (j == tabEnt[i].length - 1 - i) {
        tabEnt[i][j] = "N";
      }
    }
  }
}
/**********Test des fonctions*****************/
let tab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
document.write("Tous est positif ? " + tousPositif(tab) + "<br>");

document.write("La somme est de : " + sommeDesImpairs(tab) + "<br>");
