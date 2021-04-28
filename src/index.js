const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]')
const box1 = document.querySelector('[data-box]')
const output = document.querySelector('[data-output]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box1.classList.toggle(input.value)
  const inputText = input.value
  input.value = ''
  input.focus()
  const outputText = inputText.toUpperCase()
  output.value = outputText
})
