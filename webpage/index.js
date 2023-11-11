function getDateTime() {
    let date = new Date();
    document.getElementById("day").textContent = date.getDay().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("month").textContent = date.getMonth().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("year").textContent = date.getFullYear();

    document.getElementById("hour").textContent = date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("minute").textContent = date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.getElementById("second").textContent = date.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});
}