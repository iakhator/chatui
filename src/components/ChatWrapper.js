import React from 'react';

export default function ChatWrapper () {
  return(
    <>
      <div className="chat__wrapper">
        <div className="chat">
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
          <div className="chat__messages user-chat">
            <span>author</span>
            <p>message</p>
            <span className="chat__messages-date">date</span>
          </div>
        </div>
      </div>
      <div className="chat__footer">
        <div className="chat__footer-input">
          <input
            type="text"
            placeholder="Message"
          />
          <button type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
