const button = document.querySelector('button');
button.addEventListener('click',function(){
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
    if(!height || !weight || height < 0 || weight < 0 ||  isNaN(height) || isNaN(weight)){
        result.innerHTML = `please enter a valid information`
        return;
    }
    const bmi = weight/((height * height)/10000);
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi < 24.9) {
        category = "Normal weight";
      } else if (bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
      result.innerHTML = `<span>${(bmi).toFixed(2)}</span> ${category}`;
})