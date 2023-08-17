import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

let checkCharacter = (e) => {
  let activeChar = document.querySelector('.active')

  try {
    if (e.key === " ") {
      e.preventDefault()
    }

    if (activeChar.textContent === e.key) {
      activeChar.style.opacity = 0.2
      activeChar.setAttribute('class', '')
    }
  } catch {
    document.querySelector(".display").innerHTML = ''
    let count = 0
    for (let i = 0; i < 2; i++) {
      let char = document.createElement('span')
      char.textContent = `${count}`
      char.setAttribute('class', 'active')
      count++

      document.querySelector('.display').appendChild(char)
    }
  }
}

document.addEventListener('keypress', checkCharacter)