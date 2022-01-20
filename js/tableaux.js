function initTab(tabEnt) {
  for (let i = 0; i < 10; i++) {
    tabEnt.push(i);
  }
}
function afficheTab(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    document.write("<br> Valeur n° " + (i + 1) + " = " + tabEnt[i]);
  }
}
function addValue(tabEnt, val) {
  tabEnt.push(val);
}
function deleteValue(tabEnt, val) {
  for (let i = 0; i < tabEnt.length; i++) {
    if (tabEnt[i] == val) {
      tabEnt.splice(i, 1);
    }
  }
}
let tab = new Array();

initTab(tab);
afficheTab(tab);
addValue(tab, 45);
afficheTab(tab);
deleteValue(tab, 9);
afficheTab(tab);
