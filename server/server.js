   const express = require("express")
   const socketIo = require('socket.io');
   const path = require('path');
   const http = require('http');

   var app = express();
   var server = http.createServer(app) 
   var io = socketIo(server);  // this is our websocket server
  
   const publicPath = path.join('__dirname', '../public')
   const port = process.env.PORT | 3001

   app.use(express.static(publicPath));
    // io.on lets u register an event listener. connection let u listen to new connected user to the server
    // do something with the callback function. call it with a socket.
    // this socket is similar to one we initiated in the client html file. this represent the individual user as opposed to all the users connected to the server.
   io.on('connection', (socket) => {  
    console.log('New User Connected')

    // emit is used to create the event
    // socket.emit('newMessage', {   // emit an event to a single connection.
    //     from: 'mike@mike.com',
    //     text: 'Hello Kwame',
    //     createdAt: 123
    // })

   socket.on('createMessage', (message) => {
      console.log('This is the message', message);
      io.emit('newMessage', {   // io.emit will emit an event to every single connection
       from: message.from,
       text: message.text,
       createdAt: new Date().getTime()
      })
    })

    // socket.emit from Admin text Welcome to the chat app
      socket.emit('newMessage', {
          from: 'Admin',
          text: 'Welcome to the chat app',
          createdAt: new Date().getTime()
      })

      // socket.broadcast.emit from Admin text New user joined
     socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New User Joined',
        createdAt: new Date().getTime()
    })

   })

  

server.listen(port, () => {
    console.log('Server is up and running');
})
