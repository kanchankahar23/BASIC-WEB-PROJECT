const form = document.querySelector('form');
const list = document.querySelector('#list');
let guests = [];
form.addEventListener('submit',function(e){
e.preventDefault();
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const contact = document.querySelector('#contact').value;
const guest = {
    id:Date.now() , name , email , contact
};
guests.push(guest)
renderlist();
form.reset();
});
function renderlist(){
    list.innerHTML = "";
    guests.forEach((guest)=>{
    const li= document.createElement('li')
    li.innerHTML = `${guest.name} - ${guest.email} - ${guest.contact}
    <button id="delete" onclick = 'deleteguest(${guest.id})'>Delete</button>
    `;
    list.appendChild(li);
    })
}
function deleteguest(id){
    guests= guests.filter((g) => g.id !== id);
    renderlist();
}