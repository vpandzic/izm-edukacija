let numberHolder = '';
let inputNumber = '';
let operator = null;

function numbersConnect(number){
	numberHolder = numberHolder + number;
	showOnDisplay();
}

function doOperation(op){
	//treba provjera je li uredno upisana operacija
	inputNumber = numberHolder;
	numberHolder = '';
	operator = op;
	showOnDisplay();
}

function calculate(){
	let number2 = parseFloat(numberHolder);
	let number1 = parseFloat(inputNumber);

	if(operator == '+') numberHolder = number1 + number2;
	else if(operator == '-') numberHolder = number1 - number2;
	else if(operator == '*') numberHolder = number1 * number2;
	else if(operator == '/') numberHolder = number1 / number2;                                                     

	showOnDisplay();
}

function showOnDisplay(){
	document.getElementById('display').value = numberHolder;
}