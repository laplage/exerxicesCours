//  Exercice 1
function max2(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
// Exercice 2
function max4(x, y, z, w) {
  return max2(max2(x, y), max2(z, w));
}
function max4V2(x, y, z, w) {
  let a = max2(x, y),
    b = max2(z, w);
  return max2(a, b);
}

// Exercice 3
function valeurAbs(x) {
  if (x < 0) {
    return -x;
  }
  return x;
}
// Exercice 4
function longeurChaine(chaine) {
  return chaine.length;
}

// Exercice 5
function decoupeChaine(chaine) {
  for (let i = 0; i < longeurChaine(chaine); i++) {
    document.write("<br>" + chaine.charAt(i) + "<br>");
  }
}

// Exercice 6
function rechercheCaractereDansChaine(chaine, caractere) {
  for (let i = 0; i < longeurChaine(chaine); i++) {
    if (chaine.charAt(i) == caractere) {
      return true;
    }
  }
  return false;
}

/*******************Test des fonctions************/
// fonction max2
let nombre1 = parseInt(prompt("Nombre 1")),
  nombre2 = parseInt(prompt("Nombre 2"));

document.write(
  " <br>le max entre " +
    nombre1 +
    " et " +
    nombre2 +
    " est : " +
    max2(nombre1, nombre2)
);
// test de max4
let nombre3 = parseInt(prompt("Nombre 3")),
  nombre4 = parseInt(prompt("Nombre 4"));

document.write(
  "<br> Le max est de : " + max4(nombre1, nombre2, nombre3, nombre4)
);
// Test de longueur
let maChaine = "Bonjour";
document.write("la taille de la chaine est de : " + longeurChaine(maChaine));

// Test de l'exercice 5
decoupeChaine(maChaine);

// Test de l'exercice 6
let c = "o";
document.write("<br>" + rechercheCaractereDansChaine(maChaine, c));

// Test des quelques fonctions natives
let xx = 15,
  zz = 19;

document.write(Math.max(xx, zz));
