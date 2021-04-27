console.clear()
const box = document.querySelector('.box')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

button1.addEventListener('click', () => {
  box.classList.add('blue')
})

button2.addEventListener('click', () => {
  box.classList.remove('blue')
})

button3.addEventListener('click', () => {
  box.classList.toggle('blue')
})
