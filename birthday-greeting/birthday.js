const button = document.querySelector('button')
const div = document.querySelector('.box')
const image = document.querySelector('#myimage')
const h2 = document.createElement('h2')
const img = document.createElement('img')
button.addEventListener('click',function(e){
    h2.innerHTML = "Happy Birthday, Kanchan! 🎂 Wishing you a day full of love, laughter, and cake! 🎉💖"
    div.appendChild(h2)
})