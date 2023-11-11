function getDateTime() {
    let date = new Date();
    document.getElementById("day").textContent = date.getDay().toLocaleString(undefined, {minimumIntegerDigits: 2});
    
    document.getElementById("year").textContent = date.getFullYear();

    document.getElementById("hour").textContent = date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("minute").textContent = date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("second").textContent = date.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});

    makeMonthRequest();
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