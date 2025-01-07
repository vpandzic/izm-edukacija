let actual_date = new Date();
let selected_date = new Date();
let calendar_container_id = 'calendar-month'
let calendar_info_id = 'calendar-info'

function generate_calendar_for_month() {
	let current_year = selected_date.getFullYear();
	let current_month = selected_date.getMonth();

	let start_date = new Date(current_year, current_month, 1);
	let end_date = new Date(current_year, current_month + 1, 0);

	let dates_in_current_month = [];
	for (let i = start_date.getDate(); i <= end_date.getDate(); i++) {
		dates_in_current_month.push(new Date(current_year, current_month, i));
	}

	let calendar_container_div = document.getElementById(calendar_container_id);
	let calendar_info_div = document.getElementById(calendar_info_id);

	let calendar_info_subdiv = document.createElement('div');
	let calendar_info_subdiv_span_year = document.createElement('span');
	let calendar_info_subdiv_span_month = document.createElement('span');

	calendar_info_subdiv_span_year.textContent = 'Year: ' + selected_date.getFullYear() + ', Month: ' + (parseFloat(selected_date.getMonth() + 1));
	calendar_info_subdiv_span_month.textContent = selected_date.toLocaleString('default', { month: 'long' });
	calendar_info_subdiv.className = 'calendar-info'

	calendar_info_subdiv.appendChild(calendar_info_subdiv_span_year);
	calendar_info_subdiv.appendChild(calendar_info_subdiv_span_month);

	calendar_info_div.appendChild(calendar_info_subdiv);

    let names_of_days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    for (let i = 0; i < 7; i++) {
        let name_of_day_span = document.createElement('span');
        name_of_day_span.textContent = names_of_days[i]
        calendar_container_div.appendChild(name_of_day_span)
    }

    let index_day = 1;
    let start_day = start_date.getDay();
    if (start_day == 0) start_day = 7

    while (index_day < start_day) {
        let empty_span = document.createElement('span');
        console.log('created empty span', index_day, 'date order', start_day);
        calendar_container_div.appendChild(empty_span);
        index_day++;
    }

	dates_in_current_month.forEach(function (curr_date_iterator) {
		let date_span = document.createElement('span');
		if (curr_date_iterator.getDate() == actual_date.getDate() && curr_date_iterator.getMonth() == actual_date.getMonth() && curr_date_iterator.getFullYear() == actual_date.getFullYear()) {
			date_span.className = 'date-dot'
		};
		date_span.addEventListener('click', function () {
			let all_spans = document.querySelectorAll('span');
        	all_spans.forEach(function(date_span_iterator) {
				date_span_iterator.classList.remove('date-dot')
			});
			date_span.className = 'date-dot'
		});
		date_span.textContent = curr_date_iterator.getDate();
        console.log('created filled span', curr_date_iterator.getDate())
		calendar_container_div.appendChild(date_span);
	});
}

function change_month(direction) {
	clear_content(calendar_container_id);
	clear_content(calendar_info_id);
	let curr_year = selected_date.getFullYear();
	let curr_month = selected_date.getMonth();
	console.log('Before: ' + selected_date)
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
	selected_date = new Date(curr_year, curr_month, selected_date.getDate());
	console.log('After: ' + selected_date)
	generate_calendar_for_month()
}

function current_date() {
	clear_content(calendar_container_id);
	clear_content(calendar_info_id);
	selected_date = new Date();
	generate_calendar_for_month()
}

function clear_content(element_id) { 
	document.getElementById(element_id).innerHTML = ""; 
} 

window.onload = function () {
	generate_calendar_for_month()
    console.log("Page fully loaded");
};
