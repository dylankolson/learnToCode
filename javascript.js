
function order() {
var num = document.getElementById('num').value;


var size;
if (document.getElementById('size1').checked) {
  size = document.getElementById('size1').value;} 
else if (document.getElementById('size2').checked) {
  size = document.getElementById('size2').value;}
else if (document.getElementById('size3').checked) {
  size = document.getElementById('size3').value;}
else if (document.getElementById('size4').checked) {
  size = document.getElementById('size4').value;}
   

//var size = document.getElementById('size').value;
var x = document.getElementById('color').selectedIndex;
var color = document.getElementsByTagName("option")[x].value
alert(num + " " + size +" " + color);
}
