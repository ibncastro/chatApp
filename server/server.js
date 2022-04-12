   const express = require("express")
   const socketIo = require('socket.io');
   const path = require('path');
   const http = require('http');
   const { generateMessage } = require('./utils/message')

   var app = express();
   var server = http.createServer(app) 
   var io = socketIo(server);  // this is our websocket server
  
   const publicPath = path.join('__dirname', '../public')
   const port = process.env.PORT || 3000
   const host = '0.0.0.0';

   app.use(express.static(publicPath));
    // io.on lets u register an event listener. connection let u listen to new connected user to the server
    // do something with the callback function. call it with a socket.
    // this socket is similar to one we initiated in the client html file. this represent the individual user as opposed to all the users connected to the server.
   io.on('connection', (socket) => {  
    // console.log('New User Connected')

   socket.on('createMessage', (message) => {
      console.log('This is the message: ', message);
      // io.emit will emit an event to every single connected user
      io.emit('newMessage', generateMessage(message.from, message.text));
     
    })

    // socket.emit from Admin text Welcome to the chat app
    // emit an event to a single connection.
      socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app '))

      // socket.broadcast.emit from Admin text New user joined
      // emit an event to anybody else apart from teh user who just joined
     socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'))

   })



server.listen(port, host, () => {
    console.log('Server is up and running');
})
