const randomcolor = function(){
    const hexa = '0123456789ABCDEF'
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random()*16)];
        console.log(color)
        
    }
    return color;
}
let intervalID;
const startchangingColor =  function (){
   if(!intervalID)
   {
   intervalID =  setInterval(changeColor ,1000)
   }
   function changeColor(){
    document.body.style.backgroundColor = randomcolor();
   }
}
const stopchangingColor = function (){
//   const startchangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
  }

document.querySelector('.start').addEventListener('click',startchangingColor);
document.querySelector('.stop').addEventListener('click',stopchangingColor)