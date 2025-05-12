 const button = document.querySelector('button');
 button.addEventListener('click',function(){
 const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
      } else {
        switch(operation) {
          case "add":
            result = num1 + num2;
            break;
          case "sub":
            result = num1 - num2;
            break;
          case "mul":
            result = num1 * num2;
            break;
          case "div":
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
            break;
        }
      }

      document.getElementById("result").innerText = "Result: " + result;
    
    })