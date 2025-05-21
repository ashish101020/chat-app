import React, {useContext} from 'react';
import "./myStyles.css";
import {CurrentOpenChat} from '../context/Context';
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const ChatDash = () => {
 const { currentChat } = useContext(CurrentOpenChat);
 console.log(currentChat)
  return (
    <div className='chat-dash'>
      <div className="chat-dash-header">
        <div className="user-logo">{currentChat.name[0]}</div>
        <div className="user-name">{currentChat.name}</div>
        <div className="user-status"></div>
        <div className="user-action">
          <IconButton>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat-dash-content">
        
      </div>
      <div className="chat-dash-input">
        <input placeholder='Type a Message' className='search-box'/>
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatDash