function getDateTime() {
    let date = new Date();
    document.getElementById("day").textContent = date.getDay().toLocaleString(undefined, {minimumIntegerDigits: 2});
    
    document.getElementById("year").textContent = date.getFullYear();

    document.getElementById("hour").textContent = date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("minute").textContent = date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("second").textContent = date.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});

    makeMinuteRequest();
    makeMonthRequest();
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
    request.open("GET", "http://127.0.0.1:5000");
    request.send();
}

function handleMonthRequest() {
    console.log(this.responseText);
    document.getElementById("month").textContent = this.responseText.toLocaleString(undefined, {minimumIntegerDigits: 2});
}