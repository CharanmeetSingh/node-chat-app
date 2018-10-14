var socket = io();
socket.on('connect', function() {
    console.log('Connected to the server.');
});
socket.on('disconnect', function() {
    console.log('Disconnected from the server.');
});
socket.on('newMessage', function(message) {
    console.log('newMessage', message);

    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    var messageTextBox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: "User", 
        text: messageTextBox.val()
    }, function() {
        messageTextBox.val('');
    });
});

var locationBtn = jQuery('#send-location');
locationBtn.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation does not supported by your browser.');
    }

    locationBtn.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });

        locationBtn.removeAttr('disabled').text('Send location');

    }, function() {
        alert('Unable to fetch the position.');
        locationBtn.removeAttr('disabled').text('Send location');
    });
});

socket.on('newLocationMessage', function(message) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current locaton.</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
});