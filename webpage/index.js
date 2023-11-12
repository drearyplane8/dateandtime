function getDateTime() {

    makeMinuteRequest();
    makeMonthRequest();
    makeHourRequest();
    makeDayRequest();
    makeSecondRequest();
    makeYearRequest();
}

function makeYearRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleYearRequest);
    request.open("GET", "http://127.0.0.1:5000/");

    request.send();
}

function handleYearRequest() {
    document.getElementById("year").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 4});
}

function makeMinuteRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleMinuteRequest);
    request.open("GET", "http://127.0.0.1:5000/tailor/swift/concert/countdown");

    request.send();
}

function handleMinuteRequest() {
    console.log(this.responseText);
    console.log("Taylor response: " + this.responseText)

    // The response will be in the following format: There are {} days, {} hours, {} minutes, and {} seconds until the next Taylor Swift concert.
    // From this, given the concert is at 9 pm 21/06/2024, infer the current minute

    let response = this.responseText;
    let days = response.split(" ")[2];
    let hours = response.split(" ")[4];
    let minutes = response.split(" ")[6];

    let minDifference = parseInt(days) * 24 * 60 + parseInt(hours) * 60 + parseInt(minutes);

    // Calculate the current minute
    let date = new Date(2024, 6, 21, 21, 0, 0);

    let now = date - minDifference * 60 * 1000;
    let currentMinute = new Date(now).getMinutes();

    document.getElementById("minute").textContent = currentMinute.toLocaleString(undefined, {minimumIntegerDigits: 2});
}

function makeMonthRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleMonthRequest);
    request.open("GET", "http://127.0.0.1:5000/m");
    request.send();
}

function handleMonthRequest() {
    console.log(this.responseText);
    document.getElementById("month").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}

function makeHourRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleHourRequest);
    request.open("GET", "http://127.0.0.1:5000/get/current/hour");
    request.send();
    console.log("made hour request")
}

function handleHourRequest() {
    console.log(this.responseText)
    document.getElementById("hour").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}

function makeDayRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleDayRequest);
    request.open("GET", "http://127.0.0.1:5000/day");
    request.send();
    console.log("made day request");
}

function handleDayRequest() {
    console.log(this.responseText);
    document.getElementById("day").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}

function makeSecondRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleSecondRequest);
    request.open("GET", "http://127.0.0.1:5000/get/date/sec/onds");
    request.send();
}


function handleSecondRequest() {
    console.log(this.responseText);
    document.getElementById("second").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}