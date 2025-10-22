// Display current time in milliseconds
const timeElement = document.getElementById('userTime');

function updateTime() {
  timeElement.textContent = Date.now();
}
