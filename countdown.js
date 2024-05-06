

// Countdown timer

let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

// Format - Date(yr, mon, day, hr, min)

let eventDate = new Date(2024, 6, 6, 18, 30); // Sat Jul 06 2024 18:30:00
let eventTime = eventDate.getTime();



function timer() {

    
    let todayDate = new Date();
    // time in milliseconds
    let todayTime = todayDate.getTime();

    let subtractedTime = eventTime - todayTime;

    // 60 seconds = 1000ms, 1hr = 60 min...

    let oneMinute = 60 * 1000;
    let oneHour = 60 * oneMinute;
    let oneDay= 24 * oneHour;


    // single digit num 
    let Zeroes = num => num < 10 ? `0${num}` : num;

    if (eventTime < todayTime) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = 
        `<h1>It's Event Time!</h1>`;
    } else {
        let daysRemaining = Math.floor(subtractedTime / oneDay);
        let hoursRemaining = Math.floor((subtractedTime % oneDay) / oneHour);
        let minutesRemaining = Math.floor((subtractedTime % oneHour) / oneMinute);
        let secondsRemaining = Math.floor((subtractedTime % oneMinute) / 1000);

        day.textContent = Zeroes(daysRemaining);
        hour.textContent = Zeroes(hoursRemaining);
        minute.textContent = Zeroes(minutesRemaining);
        second.textContent = Zeroes(secondsRemaining);   

    }

}

let interval = setInterval(timer, 1000);
timer();

