function updateTime(){

    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let clock = `${hour}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = `The Clock is: ${clock}`;
}

updateTime();
setInterval(updateTime, 999);