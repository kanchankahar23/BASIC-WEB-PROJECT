const button = document.querySelector('#bt');
const input = document.querySelector('#dob')
const span =  document.querySelector('#age');
button.addEventListener('click',function calculate(){

const dob = new Date((input).value);
const today = new Date();
if(!dob.getTime()){
   span.innerHTML = 'please enter a valid date.';
   return;
}
let age = today.getFullYear() - dob.getFullYear();
const month = today.getMonth() - dob.getMonth();
if(month < 0 || (month === 0 && today.getDate() < dob.getDate())){
    age--;
}
span.innerHTML = age + "years";
}
)