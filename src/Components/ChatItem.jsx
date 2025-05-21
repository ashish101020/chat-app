import React, { useContext } from 'react'
import {CurrentOpenChat} from '../context/Context';

const ChatItem = ({chat}) => {
  const { setCurrentChat } = useContext(CurrentOpenChat);
  return (
    <div className='chat-item' onClick={() => setCurrentChat(chat)}>
        <p className='chat-icon'>{chat.name[0]}</p>
        <p className='chat-title'>{chat.name}</p>
        <p className='chat-lastMessage'>{chat.lastMessage}</p>
        <p className='chat-timesStamp'>{chat.timeStamp}</p>
    </div>
  )
}

export default ChatItem