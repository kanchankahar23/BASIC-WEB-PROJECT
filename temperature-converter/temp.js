const button = document.querySelector('button');
button.addEventListener('click', function(){
    let temp = parseFloat(document.querySelector('#temp').value);
    let unit = document.querySelector('#unit').value;
    let result;
   if(temp === " "|| isNaN(temp)){
    alert('please enter valid temperature')
   }
   else{
    if(unit === "fahrenheit"){
        result = (temp * 9/5) + 32;
        document.querySelector('h2').innerText = `Converted temperature:${result}°F` 
      }
      else{
        result = temp + 273.15;
        document.querySelector('h2').innerText = `Converted temperature:${result}K`
      }
}
})