window.onload = function () {

 	var login = document.getElementById("inputLogin");
	var password = document.getElementById("inputPassword");
	var loginRegex = "^[^.](?=[^0-9])((?=.*[a-zA-Zа-яёА-ЯЁ])[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20})\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$";
	
    var passUpLowRegex="^((?=.*[a-z])(?=.*[A-Z])).{8,20}$";
    var passCharReg="^(?=.*[-+_!@#$%^&*.,?]).{8,20}$";

	var handler = function(){
    	var errorMessage = "";
		var pass = password.value;

		if( pass.length < 8 || pass.length > 20){
			errorMessage += "Password length must be 8-20 characters";
		} else
		if(!pass.match(passUpLowRegex)){
			errorMessage +="Password must contain at least one lower case char and one upper case char";
		} else
		if(!pass.match(passCharReg)){
			errorMessage +="Password must contain at least one special symbols(ex: -+_!@#$%^&*.,?)";
		}
		password.setCustomValidity(errorMessage);
    };

    login.addEventListener("blur", function(e){
   
   		var log = login.value;
   		var errorMessage = "";


   		if(!log.match(loginRegex)){
   			errorMessage+="Login length must be 4-20 chars and contain at least one char(ex: abcdef23d@gmail.com)";
   		}

		login.setCustomValidity(errorMessage);
    	

    });
	

	/*login.addEventListener("blur", function(e){
		var errorMessage = "";
		var log = login.value;

		
		if(!log.match(loginRegex)){
			errorMessage +="Wrong login";
		} 
		login.setCustomValidity(errorMessage);
	});*/
password.addEventListener("blur", handler);
};
