const localTime = new Date();
setInterval(function () {
  document.querySelector(
    "#clock"
  ).innerHTML = `${localTime.toLocaleTimeString()}`;
}, 1000);
