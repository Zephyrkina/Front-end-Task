window.onload = function () {
/*
	var elem = document.getElementById("text");
	console.log(elem);*/
	//var regex = "^[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20}\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$";
	
	//regex = "^([^\.](?:.[a-zA-Zа-яёА-ЯЁ]+)[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20})\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}";
 	login = document.getElementById("inputLogin");
	password = document.getElementById("inputPassword");

    UpLowRegex="^((?=.*[a-z])(?=.*[A-Z])).{8,20}$";
     charReg="^(?=.*[-+_!@#$%^&*.,?]).{8,20}$";

	
	//^([^\.](?:.[a-zA-Zа-яёА-ЯЁ]+)[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20})\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$


	/*var handler = function(){
		var pass = password.value;
		var log = login.value;
		if (!((log).match(regex))){
			alert("login not matches");
		} else {
			console.log(log + ".");
			log.trim();
			console.log(log + ".");


		}
		*/
/*
		var message;

		if( pass.length < 8){
			message = "password is too short";
			//alert("password is too short");
		} else
		if( pass.length > 20) {
			message = "password is too long";
			//alert("password is too long");
		} else
		if(!pass.match(UpLowRegex)){
			message ="must contain at least one lower case char and one uppaer case char";
			//alert("must contain at least one lower case char and one uppaer case char");
		} else
		if(!pass.match(charReg)){
			message ="must contain 3-5 special symbols(ex:-+_!@#$%^&*.,?)";

			//alert("must contain 3-5 special symbols(ex:-+_!@#$%^&*.,?)");
		}
		password.setCustomValidity(message);*/

/*	};*/


	//elem.addEventListener("submit", handler);
	password.addEventListener("blur", function(e){
		console.log("afsas");
		var message ="";
		var pass = password.value;

		if( pass.length < 8){
			message += "password is too short";
			//alert("password is too short");
		} else
		if( pass.length > 20) {
			message += "password is too long";
		} else
		if(!pass.match(UpLowRegex)){
			message +="must contain at least one lower case char and one uppaer case char";
		} else
		if(!pass.match(charReg)){
			message +="must contain 3-5 special symbols(ex:-+_!@#$%^&*.,?)";

			//alert("must contain 3-5 special symbols(ex:-+_!@#$%^&*.,?)");
		}
		password.setCustomValidity(message);
	});

};

/*
^[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20}\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$ 

^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])).*$
*/