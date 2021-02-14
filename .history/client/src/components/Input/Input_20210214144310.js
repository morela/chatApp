import React from "react";

import "./Input.css";

const Input = () => (
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => {
        setMessage(event.target.value);
      }}
      onKeyPress={(event) => (event.key === "Enter" ? sendMessage(event) : null)}
    />
  </form>
);

export default Input;
