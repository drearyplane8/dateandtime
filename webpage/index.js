function getDateTime() {
    let date = new Date();
    
    document.getElementById("year").textContent = date.getFullYear();

    document.getElementById("minute").textContent = date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("second").textContent = date.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});

    makeMonthRequest();
    makeHourRequest();
    makeDayRequest();
}

function makeMonthRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleMonthRequest);
    request.open("GET", "http://127.0.0.1:5000/month");
    request.send();
}

function handleMonthRequest() {
    console.log(this.responseText);
    document.getElementById("month").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}

function makeHourRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", handleHourRequest);
    request.open("GET", "http://127.0.0.1:5000/hour");
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