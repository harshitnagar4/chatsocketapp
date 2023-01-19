const http = require('http');
const express = require('express');
const port = 5000;
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
const cors = require('cors');
app.use(cors())
app.get('/',(req,res)=>{
    res.end("hey you are connected")
});
const io = socketIO(server);
io.on('connection',(socket)=>{
    console.log('newConnection', socket.id)
socket.on('joined',(ele)=>{
    console.log(`this is comming name of user ${ele.description}`)
})
})

server.listen(port,(err)=>{
    if(err){
        throw err
    }
    // console.log("server started")
});
