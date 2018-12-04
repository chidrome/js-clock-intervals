var secondsTime, interval, morningOrNight
var secondsHand = document.getElementById("second")
var minHand = document.getElementById("minute")
var hourHand = document.getElementById("hour")



document.addEventListener("DOMContentLoaded", startClock)



function startClock(){
	interval = setInterval(startClock, 1000);
	var date = new Date();
	var hr = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
 	let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
	let minPosition = (min * 360/60) + (sec* 360/60)/60;
	let secPosition = sec * 360/60;
	let digitalTime = document.getElementById("digital")
	let digitalHour = hr - 12
	// change the css for second to rotate 5 deg every seconds tick
	secondsHand.style.transform = "rotate("+secPosition+"deg)";
	minHand.style.transform = "rotate("+minPosition+"deg)";
	hourHand.style.transform = "rotate("+hrPosition+"deg)";

	digitalTime.innerHTML = "The current time is " + digitalHour + ":" + min + ":" + sec + morningOrNight


};


function amPm() {
	var date = new Date();
	var hr = date.getHours();
	if(hr >= 12) {
		morningOrNight = "AM";
	} morningOrNight = "PM";

};


console.log(amPm())




















