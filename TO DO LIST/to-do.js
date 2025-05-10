function addtask(){
    const input = document.querySelector('#taskinput');
    const tasklist = document.querySelector('#tasklist');
    const  taskText = input.value.trim();
    console.log(taskText)
    if(taskText === ""){
        alert('please enter valid task')
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    const deletebtn = document.createElement('span');
    deletebtn.textContent = "*";
    deletebtn.onclick = function(){
        li.remove();
    };
    li.appendChild(deletebtn);
    tasklist.appendChild(li);
    input.value = ""
    }
