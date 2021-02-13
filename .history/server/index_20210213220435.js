const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
socket.on("join", ({ name, room }, callback) => {
    const {error, user} = addUser(;)

    // const error = true;
    // if (error) {
    //   callback({ error: "error" });
    // }
  });

  socket.on("disconnect", () => {
    console.log("user had left!!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port  ${PORT}`));
