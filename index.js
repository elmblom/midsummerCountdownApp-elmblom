const midsummer = new Date("2025-06-22T00:00:00Z");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");

function countdownfunc() {
    let now = new Date();

    let timeDiff = midsummer - now;
    let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
    if (timeDiff < 172800000 && timeDiff > 0) {
        document.querySelector("#countdown").innerHTML = "Midsummer has arrived!";
    }
}

setInterval(() => {
    countdownfunc();
}, 1000);
countdownfunc();

const imagesArray = [];
document.querySelectorAll("#tree img").forEach((value) => {
    imagesArray.push(value);
});

let random = 0;

function addclass() {
    random = Math.floor(Math.random() * imagesArray.length);
    imagesArray[random].classList.toggle("scew");
    setTimeout(() => {
        imagesArray[random].classList.toggle("scew");
    }, 2500);
}

setInterval(() => {
    addclass();
}
, 200);