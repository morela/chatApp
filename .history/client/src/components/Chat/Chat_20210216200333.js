import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";


import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";


import "./Chat.css";
const ENDPOINT = "localhost:5000";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
 
  socket = io(ENDPOINT, { transports: ["websocket", "polling", "flashsocket"] });
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket", "polling", "flashsocket"] });

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on(
      "message",
      () => {
        setMessages([...messages, message]);
      },
      [messages]
    );
  
  });
  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };


  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        {<Messages messages={messages} name={name} /> }
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
