 // io(): a method available to us in the library. it initiate the request to open up the websocket and keep connection open.
        var socket = io(); 

        // the event we are listening to is connect but not "connection"
        // first argument is event name and second is callback function
        socket.on('connect', function () {
            console.log('Connected to server')

            socket.emit('createEmail', {
                to: 'jenny@goo.com',
                text: 'Hey Kwame'
            })
        });  

        // using the disconnect event
        // it fires whenever the connection drops
        socket.on("disconnect", function () {
            console.log('Disconnected from server');
         })


         socket.on('newEmail', function(email) {
             console.log('New Email', email)
         })

        