
//Declare all the required packages for the server backend
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');


//Returns a log if a new client has connected to the socket
io.on('connection', (socket) => {

    //Returns a log warning us that a client leaves the socket instance
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left this chat room!`})
        }
    })

    socket.on('new user', ({name, age, room, school}, callback) =>{
        const {err, user} = addUser({id: socket.id, name, age, room, school});

        if(err){
            return callback(err);
        }


        socket.emit('message', {user: 'admin', text: `${user.name} from ${user.school} has joined this chat room!`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} from ${user.school} has joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room:user.room, users: getUsersInRoom(user.room)});


        callback();
    })

    socket.on('send message', (message, callback) =>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message})
        io.to(user.room).emit('roomData', {room:user.room, users: getUsersInRoom(user.room)});


        callback();
    })
})



app.use(router);

server.listen(PORT, () =>{
    console.log(`server has started on port ${PORT}`);
});