// const form = document.querySelector('[data-form]')
const box = document.querySelector('.box')
const nr1Slider = document.querySelector('[name="nr1"]')
const nr2Slider = document.querySelector('[name="nr2"]')
const nr3Slider = document.querySelector('[name="nr3"]')
const nr4Slider = document.querySelector('[name="nr4"]')

box.style.background = 'hsl(' + nr2Slider.value + 'deg, 100%, 50%)'

nr1Slider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + nr1Slider.value + 'deg)'
})

nr2Slider.addEventListener('input', () => {
  box.style.background = 'hsl(' + nr2Slider.value + 'deg, 100%, 50%)'
})

nr3Slider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + nr1Slider.value + 'deg)'
})

nr4Slider.addEventListener('input', () => {
  box.style.background = 'hsl(' + nr2Slider.value + 'deg, 100%, 50%)'
})

// form.addEventListener('submit', event => {
//   event.preventDefault()
//   const inputText1 = input1.value
//   const inputText2 = input2.value
//   input1.value = inputText2.toUpperCase()
//   input2.value = inputText1.toLowerCase()
// })
