// it is different from the node.js 
const socket = io('http://localhost:8080');


const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector('.conatiner');



const append  = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append('You : ${message}','right');
    socket.emit('send',message);
    messageInput.value = '';
})

const Name = prompt("enter your name to join !");
socket.emit('new-user-joined',Name);

socket.on('user-joined',data =>{
append('${name} joined the chat','right');
})

socket.on('receive',data =>{
    append('${data.user} : ${data.message}','left');
})
