import React from "react";


import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Messages/Message/Message";
import "./Messages.css";

const Messages = ({ messages, name }) => (
console.log({messages});
console.log({name});

//   <ScrollToBottom>
//       console.log(messages);
//     {messages.map((message, i) => (
//       <div key={i}>
//         <Message message={message} name={name} />
//       </div>
//     ))}
//   </ScrollToBottom>
);

export default Messages;
