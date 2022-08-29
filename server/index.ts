import express from "express";
import http from 'http';
import cors from 'cors';
import { Socket, Server } from "socket.io";

const server = express();
const PORT = 5000;


const http_server = new http.Server(server);
const socketIO = new Server(http_server, {
    cors: {
        origin: "http://localhost:5500"
    }
});
server.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`🤟: ${socket.id} just connected!`);
    // Listens and logs the message to console
    // socket.on('message', (data) => {
    //     console.log(data);
    // });

    // Sends the message to all the users on the server
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
        console.log(data);
    })

    socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data))

    socket.on('disconnect', () => {
        console.log(`😭: A user disconnected`);
    });
});



server.get('/api', (req, res) => {
    res.json({
        message: 'Aqua Chat',
    });
});

http_server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})