import React from "react";

import "./Input.css";

const Input = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Type a message..."
      onChange={(event) => {
        setMessage(event.target.value);
      }}
      onKeyPress={(event) => (event.key === "Enter" ? sendMessage(event) : null)}
      className="input"
      value={message}
    />
  </form>
);

export default Input;
