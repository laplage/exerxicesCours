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
    for (let i = 0; i < tabEnt.length; i++) {
      document.write(tabEnt[i][j] + " ");
    }
    document.write("<br>");
  }
}
// Exercice 4 : A vos pinceaux !
function noirDiagonaleGauche(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if (i == j) {
        tabEnt[i][j] = "N";
      }
    }
  }
}
function noirPLigneDLigneEtDg(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      if (i == j || i == 0 || i == tabEnt.length - 1) {
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
function initialisationTabBlanc(tabChar) {
  for (let i = 0; i < tabChar.length; i++) {
    for (let j = 0; j < tabChar[i].length; j++) {
      tabChar[i][j] = "B";
    }
  }
}
function afficherTab(tabChar) {
  for (let i = 0; i < tabChar.length; i++) {
    for (let j = 0; j < tabChar[i].length; j++) {
      document.write(" " + tabChar[i][j] + " ");
    }
    document.write("<br>");
  }
}
// Exercice 5

function tabDeCote(tabCote) {
  let moyenne, compteurEtud, sommeCote;
  compteurEtud = 0;
  for (let i = 0; i < tabCote.length; i++) {
    sommeCote = 0;
    moyenne = 0;
    for (j = 0; j < tabCote[i].length; j++) {
      sommeCote = sommeCote + tabCote[i][j];
    }
    //Calcul de la moyenne d'un étudiant
    moyenne = sommeCote / tabCote[i].length;
    // Test de cette moyenne si elle >= 10
    if (moyenne >= 10) {
      compteurEtud = compteurEtud + 1; // compteurEtud +=1;
    }
  }
  let p = (compteurEtud / tabCote.length) * 100;
  document.write("le pourcentage est : " + p + " %");
}

/**********Test des fonctions*****************/
let tab = [
  [1, 2, 3],
  [4, 5, 6],
  [17, 10, 10],
];
// document.write("Tous est positif ? " + tousPositif(tab) + "<br>");

// document.write("La somme est de : " + sommeDesImpairs(tab) + "<br>");

// document.write("Valeur aléatoire :" + Math.floor(Math.random() * tab.length));
let tabC = [
  [15, 15, 15],
  [10, 10, 10],
  [17, 10, 9],
  [7, 10, 5],
];
tabDeCote(tabC);
// Création de tableau
let tabCaractere = new Array(10);
for (i = 0; i < tabCaractere.length; i++) {
  tabCaractere[i] = new Array(10);
}
document.write("<br>");
initialisationTabBlanc(tabCaractere);
afficherTab(tabCaractere);

noirDiagonaleDroite(tabCaractere);
document.write("<br>");
afficherTab(tabCaractere);
