import React, { useState } from 'react';
import "./myStyles.css";
import ChatItem from './ChatItem';
// import {CurrentOpenChat} from '../context/Context';

const ChatList = () => {
  // const { currentChat, setCurrentChat } = useContext(CurrentOpenChat);
  const [chats, setChats] = useState([
    {
      name:"Ram ji",
      lastMessage:"hello",
      timeStamp:"Today"
    },
    {
      name:"Sita ji",
      lastMessage:"ok",
      timeStamp:"yesterday"
    },
    {
      name:"Lk ji",
      lastMessage:"good",
      timeStamp:"Today"
    },
  ]);
  return (
    <div className='chat-list'>
      {chats.map((chat) => (
        <ChatItem chat={chat}/>
      ))}
    </div>
  )
}

export default ChatList