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
 
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket", "polling", "flashsocket"] });

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
}, []);


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
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
 
    </div>
  );
};

export default Chat;
