import React from 'react';

export default function ChatMessage(props) {
  const {chat, loggedUser} = props
  return (
    <div
      className={`chat__messages ${
        loggedUser === chat.author ? "user-chat" : ""
      }`}
    >
      <span>{chat.author}</span>
      <p>{chat.message}</p>
      <span className="chat__messages-date">{chat.timestamp}</span>
    </div>
  )
}
