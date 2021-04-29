// const form = document.querySelector('[data-form]')
const box = document.querySelector('.box')
const rotationSlider = document.querySelector('[name="rotation"]')
const colorSlider = document.querySelector('[name="color"]')
const sizeSlider = document.querySelector('[name="size"]')
const radiusSlider = document.querySelector('[name="radius"]')

box.style.transform = 'rotate(' + rotationSlider.value + 'deg)'
box.style.background = 'hsl(' + colorSlider.value + 'deg, 100%, 50%)'

rotationSlider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + rotationSlider.value + 'deg)'
})

colorSlider.addEventListener('input', () => {
  box.style.background = 'hsl(' + colorSlider.value + 'deg, 100%, 50%)'
})

sizeSlider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + sizeSlider.value + 'deg)'
})

radiusSlider.addEventListener('input', () => {
  box.style.background = 'hsl(' + radiusSlider.value + 'deg, 100%, 50%)'
})

// form.addEventListener('submit', event => {
//   event.preventDefault()
//   const inputText1 = input1.value
//   const inputText2 = input2.value
//   input1.value = inputText2.toUpperCase()
//   input2.value = inputText1.toLowerCase()
// })
