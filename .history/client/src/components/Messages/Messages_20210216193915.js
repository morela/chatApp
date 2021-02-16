import React from "react";


import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Messages/Message/Message";
import "./Messages.css";


const Messages = ({ messages, name }) => (

  <ScrollToBottom>


    
    {messages.map((message, i) => (
        console.log(message)
    //   <div key={i}>
         <Message message={message} name={name}/>
    //   </div>
    ))} 
  </ScrollToBottom>
);

export default Messages;
