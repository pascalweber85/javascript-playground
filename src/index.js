const form = document.querySelector('[data-form]')
const box = document.querySelector('.box')
const input1 = document.querySelector('[name="input1"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputText1 = input1.value
  box.style.background = inputText1
  form.reset()
  input1.focus()
})
