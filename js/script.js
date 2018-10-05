window.onload = function () {
document.getElementById("sort-by-name").onclick = function() {
	sortByName();
};

sorted_name_strict = {value: true};
sorted_size_strict = {value: true};
sorted_date_strict = {value: true};

function sortByName() {
	let obj = new Object();
	let arr = new Array();
	
	let table = document.getElementById("my-table");
	let rows = table.rows;

	parseFromTable(rows, arr);

	sortRecords(arr, (a, b) =>( (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)),
			 (a, b) =>( (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0)), 
	 		 sorted_name_strict );

	writeToTable(rows, arr);
}


document.getElementById("sort-by-size").onclick = function() {
	sortBySize();
};



function sortBySize() {
	var obj = new Object();
	var arr = new Array();
	
	table = document.getElementById("my-table");

	rows = table.rows;

	parseFromTable(rows, arr);

	sortRecords(arr, (a, b) =>( (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)),
			 (a, b) =>( (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0)), 
	 		 sorted_name_strict );


	if(sorted_size_strict) {
		arr.sort((a, b) =>( (a.weight > b.weight) ? 1 : ((a.weight < b.weight) ? -1 : 0)));
		sorted_size_strict = !sorted_size_strict;
	}
	else {
		arr.sort((a, b) =>( (a.weight < b.weight) ? 1 : ((a.weight > b.weight) ? -1 : 0)));
		sorted_size_strict = !sorted_size_strict;
	}

	writeToTable(rows, arr);

};


document.getElementById("sort-by-date").onclick = function() {
	sortByDate();
};


function sortByDate() {
	var obj = new Object();
	var arr = new Array();
	
	table = document.getElementById("my-table");

	rows = table.rows;

	parseFromTable(rows, arr);

	if(sorted_date_strict) {
		arr.sort((a, b) =>( (a.date > b.date) ? 1 : ((a.date < b.date) ? -1 : 0)));
		sorted_date_strict = !sorted_date_strict;
	}
	else {
		arr.sort((a, b) =>( (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0)));
		sorted_date_strict = !sorted_date_strict;
	}

	writeToTable(rows, arr);

};

function sortRecords(arr, lambda1, lambda2, flag) {
	arr.sort(flag.value ? lambda1 : lambda2);
	flag.value = !flag.value;
}

function parseFromTable(rows, arr){
	for (i = 1; i < rows.length; i++) {
		let n = rows[i].getElementsByTagName("TD")[0].getElementsByTagName("a")[0].innerHTML.toLowerCase(); 
		let s = rows[i].getElementsByTagName("TD")[1].innerHTML.toLowerCase();
		let d= rows[i].getElementsByTagName("TD")[2].innerHTML.toLowerCase();
		let record = {name:n, weight:s, date: d};
		arr.push(record);
	}
};

function writeToTable(rows, arr){
	for (i = 1; i < rows.length; i++) {
		rows[i].getElementsByTagName("TD")[0].getElementsByTagName("a")[0].innerHTML = arr[i-1].name; 
		rows[i].getElementsByTagName("TD")[1].innerHTML = arr[i-1].weight;
		rows[i].getElementsByTagName("TD")[2].innerHTML = arr[i-1].date;
	}
};

};