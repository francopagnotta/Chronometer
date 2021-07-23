
let sphere = document.querySelector('.seconds-sphere');
// define var to hold setInterval() function
let interval = null;

// Define var yo hold stopwtach status 
let status = "stopped";

// define variables to hold line values
let seconds = 0;
let minutes = 0;
let hours = 0;

// define vars to hold "display" value 
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


// stopwatch function (logic to determine when to increment next value,etc.)
function stopwatch () {
	seconds++;

	// logic to determine when to increment next value
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}


	// if seconds/minutes/hours are only one digit, add a leading 0 to the value
	if (seconds < 10) {
		displaySeconds = "0" + seconds.toString();
	} else {
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = "0" + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = "0" + hours.toString();
	} else {
		displayHours = hours;
	}

	// display updated time values to user
	document.querySelector('.stopwatch-container__values').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop() {
	if(status === 'stopped') {
		// start the stopwatch (by calling the setInterval() function)
		// interval change
		interval = window.setInterval(stopwatch,1000);

		// status change
		status = 'started';

		// button icon change
		document.getElementById('btn-icon').classList.replace('fa-play', 'fa-pause');
		
		// title change
			document.querySelector('.title').innerHTML = 'PLAY';
			document.querySelector('.title').style.color = '#02DA17';
	} 
	
	else {
		// status change
		status = 'stopped';
		
		// interval change
		window.clearInterval(interval);
		
		
		// button icon change
		document.getElementById('btn-icon').classList.replace('fa-pause','fa-play');
		
		// title change
			document.querySelector('.title').innerHTML = 'PAUSED';
			document.querySelector('.title').style.color = '#ff7477';
		}
	}

	// function to reset the stopwatch
	function reset() {
		window.clearInterval(interval);
		
		// reset times
		seconds = 0;
		minutes = 0;
		hours = 0;
		
		// reset status
		status = 'stopped';
		
		// display restart
		document.querySelector('.stopwatch-container__values').innerHTML = "00:00:00";
		
		// title 
		document.querySelector('.title').innerHTML = 'RESET...';
		document.querySelector('.title').style.color = '#adb5bd';
		
		setTimeout(function() {
			document.querySelector('.title').innerHTML = '';
		},500);

	// change button
	document.getElementById('btn-icon').classList.replace('fa-pause','fa-play');
}
