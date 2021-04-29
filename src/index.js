// const form = document.querySelector('[data-form]')
const box = document.querySelector('.box')
const nr1Slider = document.querySelector('[name="nr1"]')
const nr2Slider = document.querySelector('[name="nr2"]')

nr1Slider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + nr1Slider.value + 'deg)'
})

nr2Slider.addEventListener('input', () => {
  box.style.backgroundColor = 'color(' + nr2Slider.value + 'rgb)'
})
