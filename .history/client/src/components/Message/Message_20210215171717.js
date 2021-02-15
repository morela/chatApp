import React from "react";

import "./Message.css";


const Message = ({ messages, name }) => {
let isSentByCurrentUser = false;

const trimmedName = name.trim().toLowerCase();

if (user===trimmedName)
isSentByCurrentUser = true;

return{
    isSentByCurrentUser ? (
<div className="messageContainer">
<p className="">{trimmedName}</p>sentText
</div>

    ) : ()
}
}
 
export default Message;




const Message = ({ message, name }) => (




);

export default Message;