const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand')

function setDate() {
  const now = new Date();

  // SECONDS HAND
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds/60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  // MINUTE HAND
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes/60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  // HOUR HAND
  const hours = now.getHours();
  const hoursDegree = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);