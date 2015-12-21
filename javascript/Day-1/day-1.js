var age = 15;
var name = 'Peter Parker';
var isMale = true;
var kids = {};
var vehicle = ['Activa', 'Dio', 'Santro'];



function addValuesToArray(val) {
	vehicle.push(val);
	console.log(vehicle);
}

function removeValuesFromArrayByValue(val) {
	var index = vehicle.indexOf(val);
	if(index < 0) {
		console.log('Please provide proper value');
		return;
	}
		vehicle.splice(index,1);
		console.log(vehicle);
}

function removeValuesFromArrayFromStart() {
	vehicle.shift();
	console.log(vehicle);
}

function removeValuesFromArrayFromEnd() {
	vehicle.pop();
	console.log(vehicle);
}

function removeValuesFromArrayByIndex(start, end) {
	console.log(start+'==='+end);
	return false;
	if(typeof vehicle[index] === 'undefined') {
		console.log('Please provide proper index');
		return;	
	}
		vehicle.splice(index,1);
		console.log(vehicle);
}

function toggleBooleanVariableValue() {
	isMale = (isMale === true) ? false : true;
	console.log('Peter is male: ' +isMale);
}