window.onload = function () {

	var elem = document.getElementById("text");
	console.log(elem);
	var regex = "^[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20}\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$";
	var login = document.getElementById("inputLogin");
	


	var handler = function(){
		
		if ((login.value).match(regex)){
			alert("matches");
			console.log("matches");
		}
		else {
			console.log("not matches");
			alert("not matches");
		}
	};

/*var handler = function() {
	console.log(login.value);
}*/

	elem.addEventListener("click", handler);

};

/*
^[0-9a-zA-Zа-яёА-ЯЁ_.-]{4,20}\@[a-zA-Zа-яёА-ЯЁ0-9]{2,5}(\.[a-zA-Zа-яёА-ЯЁ0-9]{2,5}){1,2}$ 
*/