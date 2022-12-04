// Node Server which will handle socket io connection.
// var express = require('express');
// const cors = require('cors');
// const app = express();
// const http = require('http');
// const serv = http.createServer(app);
// console.log(serv);
const io = require('socket.io')(8080)
// io.use(cors());
const users = {};
io.on('connection',socket =>{
    socket.on('new-user-joined',name =>{
      alert("new users came !");
      users[socket.id]=name;
      socket.broadcast.emit('user-joined',name);
     });
    
    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})
    });// yha par bhi name to nam change kiya h mene .
  
    // socket.on('receive',message=>{
    //     socket.broadcast. emit('recieve',{message:message,name:users[socket.id]})
    // });

});
// io.on => scoket.io instance which will listen various socket connections ! 
