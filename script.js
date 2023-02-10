const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1
    countdown()
  }, 1000)
}

buttonPlay.onclick = () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
}

buttonPause.onclick = () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

buttonStop.onclick = () => {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

buttonSoundOn.onclick = () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
}

buttonSoundOff.onclick = () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
}

buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})
