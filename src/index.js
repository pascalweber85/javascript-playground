console.clear()
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')

button1.addEventListener('click', () => {
  box1.classList.remove('hidden')
  box2.classList.add('hidden')
  box3.classList.add('hidden')
  box4.classList.add('hidden')
})

button2.addEventListener('click', () => {
  box1.classList.add('hidden')
  box2.classList.remove('hidden')
  box3.classList.add('hidden')
  box4.classList.add('hidden')
})

button3.addEventListener('click', () => {
  box1.classList.add('hidden')
  box2.classList.add('hidden')
  box3.classList.remove('hidden')
  box4.classList.add('hidden')
})

button4.addEventListener('click', () => {
  box1.classList.add('hidden')
  box2.classList.add('hidden')
  box3.classList.add('hidden')
  box4.classList.remove('hidden')
})
