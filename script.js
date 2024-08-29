let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let periodElem = document.getElementById("period");

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  hrs.innerHTML = hours;
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
  periodElem.innerHTML = period;
}

// Initialize clock display immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
