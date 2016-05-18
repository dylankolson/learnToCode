
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

$(document).ready(function() {
	//Add stripes to the table
	$('table tr:odd').addClass('striped');

	//Review Form
	$('#postReview').on('click',function(e) {
		e.preventDefault();

		//Validate form
		if (
			$('#reviewer').val() != '' 
			&& $('#comments').val() != ''
		) {
			//Copy an existing review
			var copy = $('.review:first').clone();

			//Change the values to what was submitted
			copy.find('.rating').text($('#rating option:selected').text());
			copy.find('h3').text($('#reviewer').val());
			copy.find('.comment').text($('#reviewform #comments').val());

			//Add the review to the end of the list
			$('#reviews').append(copy);

			//Reset the form
			$('#reviewer').val('');
			$('#comments').val('');
			$('#rating option').prop('selected',false);
		} else {
			alert('Please provide a name and some comments');
		}
	});
});
