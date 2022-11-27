let ball = document.getElementById("ball")

ball.addEventListener("click", () => {
  document.body.classList.toggle("light")
})

let hours = document.getElementById("hour")
let minutes = document.getElementById("minute")
let seconds = document.getElementById("second")

setInterval(() => {
  let date = new Date()
  let currentHour = date.getHours()
  let currentMinute = date.getMinutes()
  let currentSecond = date.getSeconds()

  if (currentHour < 10) currentHour = "0" + currentHour
  if (currentMinute < 10) currentMinute = "0" + currentMinute
  if (currentSecond < 10) currentSecond = "0" + currentSecond

  hours.innerText = currentHour
  minutes.innerText = currentMinute
  seconds.innerText = currentSecond
}, 1000)
