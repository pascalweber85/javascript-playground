const form = document.querySelector('[data-form]')
const input1 = document.querySelector('[name="input1"]')
const input2 = document.querySelector('[name="input2"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputText1 = input1.value
  const inputText2 = input2.value
  input1.value = inputText2.toUpperCase()
  input2.value = inputText1.toLowerCase()
})
