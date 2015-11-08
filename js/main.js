function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt ('What is your last name?');

var fullName = firstName + ' ' + lastName; {

console.log(fullName);
}

var userAge = prompt('How old are you?'); 
userAge = parseInt(userAge);

if (userAge >= 18) {
	console.log('User is an adult');
}	else if (userAge >= 13) {
	console.log('User is a teenager');
}	else {
	console.log('Go away child');
}


$('h2').text('Hello ' + fullName);


if (firstName == 'General' && lastName != 'Assembly') {
	console.log('Hello General');

}

var faveColour = prompt('What is your favourite colour?').toLowerCase();

console.log(faveColour);

if (faveColour == 'red' ||
	faveColour == 'blue' ||
	faveColour == 'green' ||
	faveColour == 'yellow') {
	$('h1').css('color', faveColour);

	}
	
}



//when the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	// hide all the content
	$('h3').next().hide();	

	//when the user clicks an h3
	$('h3').on ('click', function() {

		// Toggle the next element
		$(this).next().slideToggle(400);
	
	});

});
