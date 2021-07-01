import React, {useEffect, useState} from 'react';
import axios from '../config';
import ChatMessages from './ChatMessage'

export default function ChatWrapper () {
  const loggedUser = "Itua";//fake loggedin user
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchChatMessages () {
      setLoading(true)
      try {
        const response = await axios.get();
        setChats(response.data)
        setLoading(false)
      } catch (e) {
        console.error(e)
        setLoading(false)
      }
    }

    fetchChatMessages()
  }, [])

  const handleSubmit = async () => {
    try {
      debugger
      const response =  await axios.post(null,  {author: loggedUser, message: input })
      console.log(response, 'response')
      setChats([...chats, response.data]);
      setInput("");
    } catch (error) {
      console.error(error)
    }
  };

  return(
    <>
     <div className="wrap">
        <div className="chat__wrapper">
          <div className="chat">
            {loading && <div>Loading Messages...</div>}
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
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
