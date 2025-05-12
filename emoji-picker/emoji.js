const output = document.getElementById('output');
const emojis  = document.querySelectorAll('.emoji');
emojis.forEach(emoji => {
    emoji.addEventListener('click',function(e){
        output.innerText = emoji.textContent
    })
});