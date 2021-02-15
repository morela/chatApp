import React from "react";

import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ Messages, name }) => (
  <ScrollToBottom>
    {Messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
