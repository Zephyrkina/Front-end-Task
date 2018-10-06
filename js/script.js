window.onload = function () {

ascSortDirectionFlagForName = {value: true};
ascSortDirectionFlagForWeight = {value: true};
ascSortDirectionFlagForDate = {value: true};

document.getElementById("sort-by-name").onclick = function() {
	var ascSortingConditionByName = (a, b) =>( (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
	var descSortingConditionByName = (a, b) =>( (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
	
	sort(ascSortingConditionByName, descSortingConditionByName, ascSortDirectionFlagForName);
};

document.getElementById("sort-by-size").onclick = function() {
	var ascSortingConditionByWeight = (a, b) =>( (a.weight > b.weight) ? 1 : ((a.weight < b.weight) ? -1 : 0));
	var descSortingConditionByWeight = (a, b) =>( (a.weight < b.weight) ? 1 : ((a.weight > b.weight) ? -1 : 0));

	sort(ascSortingConditionByWeight, descSortingConditionByWeight, ascSortDirectionFlagForWeight);
};

document.getElementById("sort-by-date").onclick = function() {
	var ascSortingConditionByDate = (a, b) =>( (a.date > b.date) ? 1 : ((a.date < b.date) ? -1 : 0));
	var descSortingConditionByDate = (a, b) =>( (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0));

	sort(ascSortingConditionByDate, descSortingConditionByDate, ascSortDirectionFlagForDate);
};

function sort(ascSortingCondition, descSortingCondition, sortDirectionFlag) {
	var table = document.getElementById("my-table");
	var records = parseFromTable(table);

	records.sort(sortDirectionFlag.value ? ascSortingCondition : descSortingCondition);
	sortDirectionFlag.value = !sortDirectionFlag.value;

	writeToTable(table, records);
};

function parseFromTable(table){
	var rows = table.rows;
	var records = new Array();

	for (let i = 1; i < rows.length; i++) {
		let n = rows[i].getElementsByTagName("TD")[0].getElementsByTagName("a")[0].innerHTML.toLowerCase(); 
		let s = rows[i].getElementsByTagName("TD")[1].innerHTML.toLowerCase();
		let d= rows[i].getElementsByTagName("TD")[2].innerHTML.toLowerCase();
		let record = {name:n, weight:s, date: d};
		records.push(record);
	}
	return records;
};

function writeToTable(table, arr){
	var rows = table.rows;
	for (let i = 1; i < rows.length; i++) {
		rows[i].getElementsByTagName("TD")[0].getElementsByTagName("a")[0].innerHTML = arr[i-1].name; 
		rows[i].getElementsByTagName("TD")[1].innerHTML = arr[i-1].weight;
		rows[i].getElementsByTagName("TD")[2].innerHTML = arr[i-1].date;
	}
};

};