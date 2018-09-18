const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
    
    socket.emit('newMessage', {
        from: "Julia",
        text: "Yup!",
        createdAt: 123
    });

    socket.on('createMessage', (Message) => {
        console.log('CreateMessage', Message);
    });
});

server.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
});
