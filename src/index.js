const form = document.querySelector('[data-form]')
// const header = document.querySelector('[data-header]')//
const input = document.querySelector('[data-input]')
const box1 = document.querySelector('[data-box]')

form.addEventListener('submit', currywurst => {
  currywurst.preventDefault()
  box1.classList.toggle(input.value)
})

// form.addEventListener('submit', currywurst => {
//   currywurst.preventDefault()
//   header.innerText = input.value
// })
