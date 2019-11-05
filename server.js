let app = require('express')();

let http = require('http').Server(app);

let io = require('socket.io')(http);

app.get("/" , function (req , res) {
   res.sendFile(__dirname + '/index.html');
});


http.listen(4000 , function () {
   console.log("Server start");
});



io.on('connect' , function (socket) {
   socket.emit('message', {
      data : "Guest " + socket.id + "connected",
      meta : 3
   });
});
