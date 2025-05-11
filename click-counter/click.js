const button = document.querySelector('button')
const num = document.querySelector('#count')
let count = 0;
button.addEventListener('click',function(e){
    count++;
    num.innerHTML = count;
})