let numberHolder = '';
let inputNumber = '';
let operator = null;

let actualDate = new Date();
let selectedDate = new Date();
let calendarContainerId = 'calendar-month'
let calendarInfoId = 'calendar-info'

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

function generateCalendarForMonth() {
	let currentDay = selectedDate.getDate();
	let currentYear = selectedDate.getFullYear();
	let currentMonth = selectedDate.getMonth();
	let startDate = new Date(currentYear, currentMonth, 1);
	let endDate = new Date(currentYear, currentMonth + 1, 0);
	let dates = [];
	for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
		dates.push(new Date(currentYear, currentMonth, i));
	}
	let containerDiv = document.getElementById(calendarContainerId);
	let calendarInfoDiv = document.getElementById(calendarInfoId);
	let div = document.createElement('div');
	// let div_text_year = document.createTextNode('Year: ' + selectedDate.getFullYear());
	// let div_text_month = document.createTextNode('Month: ' + parseFloat(selectedDate.getMonth() + 1));
	div_span_year = document.createElement('span');
	div_span_month = document.createElement('span');
	div_span_year.textContent = 'Year: ' + selectedDate.getFullYear() + ', Month: ' + (parseFloat(selectedDate.getMonth() + 1));
	//div_span_month.textContent = 'Month: ' + parseFloat(selectedDate.getMonth() + 1)
	div_span_month.textContent = selectedDate.toLocaleString('default', { month: 'long' });
	div.className = 'calendar-info'
	// div.appendChild(div_text_year);
	// div.appendChild(div_text_month);
	div.appendChild(div_span_year);
	div.appendChild(div_span_month);
	calendarInfoDiv.appendChild(div);
	dates.forEach(function (curr_date) {
		let span = document.createElement('span');
		if (curr_date.getDate() == actualDate.getDate() && curr_date.getMonth() == actualDate.getMonth() && curr_date.getFullYear() == actualDate.getFullYear()) {
			span.className = 'date-dot'
		}
		//span.onclick = function(this) { this.className = 'date-dot'; };
		//span.addEventListener('click', function(this){ this.className = 'date-dot';});
		span.addEventListener('click', function () {
			let all_spans = document.querySelectorAll('span');
        	all_spans.forEach(function(el) {el.classList.remove('date-dot')});
			span.className = 'date-dot'
		});
		span.textContent = curr_date.getDate();
		// console.log(curr_date + ' ' + actualDate)
		// console.log(curr_date.getDate() == actualDate.getDate() && curr_date.getMonth() == actualDate.getMonth() && curr_date.getFullYear() == actualDate.getFullYear())
		containerDiv.appendChild(span);

	})
}

function changeMonth(direction) {
	clearContent(calendarContainerId);
	clearContent(calendarInfoId);
	let curr_year = selectedDate.getFullYear();
	let curr_month = selectedDate.getMonth();
	console.log('Before: ' + selectedDate)
	if (direction == "+") {
		if (curr_month == 11) {
			curr_month = 0;
			curr_year += 1;
		} else {
			curr_month += 1;
		}
	} else {
		if (curr_month == 0) {
			curr_month = 11;
			curr_year -= 1;
		} else {
			curr_month -= 1;
		}
	}
	selectedDate = new Date(curr_year, curr_month, selectedDate.getDate());
	console.log('After: ' + selectedDate)
	generateCalendarForMonth()
}

function currentDate() {
	clearContent(calendarContainerId);
	clearContent(calendarInfoId);
	selectedDate = new Date();
	generateCalendarForMonth()
}

function clearContent(elementID) { 
	document.getElementById(elementID).innerHTML = ""; 
} 

window.onload = function () {
	generateCalendarForMonth()
    console.log("Page fully loaded");
};







// function nextDate() {
// 	clearContent(calendarContainerId);
// 	clearContent(calendarInfoId);
// 	let curr_year = selectedDate.getFullYear();
// 	let curr_month = selectedDate.getMonth();
// 	console.log('Before: ' + selectedDate)
// 	if (curr_month == 11) {
// 		curr_month = 0;
// 		curr_year += 1;
// 	} else {
// 		curr_month += 1;
// 	}
// 	selectedDate = new Date(curr_year, curr_month, selectedDate.getDate());
// 	console.log('After: ' + selectedDate)
// 	generateCalendarForMonth()
// }

// function previousDate() {
// 	clearContent(calendarContainerId);
// 	clearContent(calendarInfoId);
// 	let curr_year = selectedDate.getFullYear();
// 	let curr_month = selectedDate.getMonth();
// 	console.log('Before: ' + selectedDate)
// 	if (curr_month == 0) {
// 		curr_month = 11;
// 		curr_year -= 1;
// 	} else {
// 		curr_month -= 1;
// 	}
// 	selectedDate = new Date(curr_year, curr_month, selectedDate.getDate());
// 	console.log('After: ' + selectedDate)
// 	generateCalendarForMonth()
// }
