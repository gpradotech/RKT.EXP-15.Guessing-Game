// Foco inicial
window.onload = () => {
  document.querySelector('#inputNumber').focus()
}

// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const inputNumber = document.querySelector('#inputNumber')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

inputNumber.addEventListener('input', regexNumber10)

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyEnter)

// Funções
function handleTryClick(event) {
  event.preventDefault()


  const value = inputNumber.value.trim()

  // Verifica se o campo está vazio
  if (value == "") {
    alert("Por favor, digite um número entre 0 e 10.")
    return
  }

  // Verifica se o valor é um número válido entre 0 e 10
  if (isNaN(value) || value < 0 || value > 10) {
    alert("Por favor, digite um número entre 0 e 10.")
    inputNumber.value = ""
    return
  }

  // Verifica se o usuário acertou
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
    console.log(`Acertou em ${xAttempts} tentativas`)
  }
  
  inputNumber.value = ""
  xAttempts++
}
function handleResetClick(event) {
  event.preventDefault() // impede envio do formulário

  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  document.querySelector('#inputNumber').focus()
}

function handleKeyEnter(event) {
  if(event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick(event)
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function regexNumber10() {
  // Remove tudo que não for dígito
  inputNumber.value = inputNumber.value.replace(/[^0-9]/g, '')

  // Limita a entrada a "10" no máximo
  if (Number(inputNumber.value) > 10) {
    inputNumber.value = inputNumber.value.slice(0, -1)
  }
}