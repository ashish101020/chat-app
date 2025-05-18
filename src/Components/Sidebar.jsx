import React from 'react'
import SideHead from './SideHead'
import Search from './Search'
import ChatList from './ChatList';
import "./myStyles.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sideHead">
            <SideHead/>
        </div>
        <div className="search">
            <Search/>
        </div>
        <div className="chatList">
            <ChatList/>
        </div>
    </div>
  )
}

export default Sidebar