const arrow = document.getElementsByClassName("arrow")
    // console.log(arrow);
const hour = arrow[0];
const min = arrow[1];
const sec = arrow[2];

function seconds(a) {
    const date = new Date();
    let secondTime = date.getSeconds();
    secDeg = (((secondTime / 60) * 360) + 90);
    sec.style.transform = `rotate(${secDeg}deg)`;
    // console.log(secondTime);

}

function minute(a) {
    const date = new Date();
    let minTime = date.getMinutes();
    minDeg = (((minTime / 60) * 360) + 90);
    min.style.transform = `rotate(${minDeg}deg)`;
    // console.log(minTime);

}

function hours(a) {
    const date = new Date();
    let hourTime = date.getHours();
    hourDeg = (((hourTime / 12) * 360) + 90);
    hour.style.transform = `rotate(${hourDeg}deg)`;
    // console.log(minTime);

}
minute()
hours()
setInterval(seconds, 1000);
setInterval(minute, 60000);
setInterval(hours, 3600000);