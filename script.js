
const form = document.getElementById('myform') ;
form.addEventListener('submit' , function (e) {
	if (fname.value == ""){
		 document.getElementById('first').textContent = "first name cannot be empty";
		 document.getElementById('fname').style.backgroundImage = "url('images/icon-error.svg')";
	}
	if (lname.value == ""){
		 document.getElementById('last').textContent = "last name cannot be empty";
		 document.getElementById('lname').style.backgroundImage = "url('images/icon-error.svg')";
	}
	if (email.value == ""){
		document.getElementById('email').textContent ="email@example/com";
		 document.getElementById('mail').textContent = "looks like this is not an email";
		document.getElementById('email').style.backgroundImage = "url('images/icon-error.svg')";
		
	}
	if (pin.value == ""){
		document.getElementById('pass').textContent = "first name cannot be empty";
		document.getElementById('pin').style.backgroundImage = "url('images/icon-error.svg')";
   }
})