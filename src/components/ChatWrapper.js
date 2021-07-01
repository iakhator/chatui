import React, {useEffect, useState} from 'react';
import instance from '../config';
import ChatMessages from './ChatMessage'

export default function ChatWrapper () {
   const [loggedUser, setLoggedUser] = useState("Itua");//fake loggedin user
   const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function fetchChatMessages () {
      try {
        const response = await instance.get();
        setChats(response.data)
        console.log(response, 'jdjdjdjdj')
      } catch (e) {
        console.error(e)
      }
    }

    fetchChatMessages()
  }, [])
  return(
    <>
     <div className="wrap">
        <div className="chat__wrapper">
          <div className="chat">
            {chats.map((chat) => (
               <ChatMessages  key={chat._id} chat={chat} loggedUser={loggedUser}/>
            ))}
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
