function afficherTab(tabEnt) {
  for (let i = 0; i < tabEnt.length; i++) {
    for (let j = 0; j < tabEnt[i].length; j++) {
      document.write(" " + tabEnt[i][j] + " ");
    }
    document.write("<br>");
  }
}
function afficherForm() {
  document.writeln("<form>");
  document.writeln("<div>");
  document.write('<label for="txtMail">Adresse mail : </labale>');
  document.write('<input type="email" id="txtMail" size="120">');
  document.writeln("</div>");
  document.writeln("<div>");
  document.write('<label for="txtMessage ">Votre Message : </labale>');
  document.write('<textarea  id = txtMessage  row="20"> </textarea>');
  document.writeln("</div>");
  document.writeln("<div>");
  document.write('<input type="submit" value="Envoyez">');
  document.writeln("</div>");
  document.writeln("</form>");
}
/************************Test *******************/
var matrix = [
  [10, 20, 30, 40],
  [22, 10, 12, 14],
  [16, 18, 42, 22],
];
afficherTab(matrix);
afficherForm();
