// const form = document.querySelector('[data-form]')
const box = document.querySelector('.box')
const rotation = document.querySelector('[name="rotation"]')
const color = document.querySelector('[name="color"]')
const size = document.querySelector('[name="size"]')
const radius = document.querySelector('[name="radius"]')

box.style.transform = 'rotate(' + rotation.value + 'deg)'
box.style.background = 'hsl(' + color.value + 'deg, 100%, 50%)'
box.style.height = size.value + 'px'
box.style.width = size.value + 'px'
box.style.borderRadius = radius.value + '%'

rotation.addEventListener('input', () => {
  box.style.transform = 'rotate(' + rotation.value + 'deg)'
})

color.addEventListener('input', () => {
  box.style.background = 'hsl(' + color.value + 'deg, 100%, 50%)'
})

size.addEventListener('input', () => {
  box.style.transform = 'rotate(' + size.value + 'deg)'
})

radius.addEventListener('input', () => {
  box.style.background = 'hsl(' + radius.value + 'deg, 100%, 50%)'
})

// form.addEventListener('submit', event => {
//   event.preventDefault()
//   const inputText1 = input1.value
//   const inputText2 = input2.value
//   input1.value = inputText2.toUpperCase()
//   input2.value = inputText1.toLowerCase()
// })
// colorSlider.addEventListener('input', () => {
// box.style.background = 'hsl(' + colorSlider.value + 'deg, 100%, 50%)'
// })
