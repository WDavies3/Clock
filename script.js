function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("minutes");
    var secondHand = document.getElementById("seconds");
    hourHand.style.rotate = (new Date().getHours()/12)*360 + 180 + "deg";
    minuteHand.style.rotate = (new Date().getMinutes()/60)*360 + 180 + "deg";
    secondHand.style.rotate = (new Date().getSeconds()/60)*360 + 180 + "deg";
    // your code here
}, 1000);
