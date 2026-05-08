// script.js
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let isRunning = false;

const time = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  time.textContent = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", function () {

  if (!isRunning) {

    timer = setInterval(updateTime, 1000);
    isRunning = true;

    startBtn.textContent = "Stop";
    startBtn.classList.add("stop");

    lapBtn.textContent = "Lap";

  } else {

    clearInterval(timer);
    isRunning = false;

    startBtn.textContent = "Start";
    startBtn.classList.remove("stop");

    lapBtn.textContent = "Reset";
  }
});

lapBtn.addEventListener("click", function () {

  if (isRunning) {

    const li = document.createElement("li");
    li.textContent = time.textContent;

    laps.prepend(li);

  } else {

    hours = 0;
    minutes = 0;
    seconds = 0;

    time.textContent = "00:00:00";

    laps.innerHTML = "";
  }
});