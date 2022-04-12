

// io(): a method available to us in the library. it initiate the request to open up the websocket and keep connection open.
var socket = io();

// the event we are listening to is connect but not "connection"
// first argument is event name and second is callback function
socket.on("connect", function () {
  console.log("Connected to server");

//   socket.emit("createMessage", {
//     from: "jenny@goo.com",
//     text: "Hey Kwame",
//   });

  // acknowledgment or feedback
//   socket.emit("createMessage", {
//     from: "Frank",
//     text: "Hi",
//   });

  // the function below is the third argument for the emit function. it recieves feedback from server
// function(data) {
//     console.log('Got it', data);
// }

  socket.on("newMessage", function (message) {
    console.log("New Message", message);
    var li = jQuery('<li></li>');
    li.text(message.from + ':' + message.text)

    jQuery('#messages').append(li)
  });

  socket.on('newLocationMessage', (message) => {
    var li = jQuery('<li></li>');
    // target=_blank will open the link in a new tab
    var a = jQuery('<a target="_blank">My Current Location</a>')  
    li.text(message.from + ":")
    a.attr('href', message.url)

    li.append(a);
    jQuery('#messages').append(li)
  })


});

// using the disconnect event
// it fires whenever the connection drops
socket.on("disconnect", function () {
  console.log("Disconnected from server");
});


jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    })
})

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if(!navigator.geolocation) {
        return alert('Geolocation not supported by ur browser')
    }
    navigator.geolocation.getCurrentPosition(function(position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function() {
        alert('Unable to fetch location.')
    })
})