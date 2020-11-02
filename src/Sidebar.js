import React from 'react'
import { Avatar,IconButton } from "@material-ui/core"
import DonutLargrIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from "@material-ui/icons"
import Sidebar_Chats from "./Sidebar_Chats"
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
               <Avatar src = "https://www.99images.com/download-image/9114/486x418"/> 
               <div className="right_sidebar_header">
                   <IconButton>
                     <DonutLargrIcon />
                   </IconButton>
                   <IconButton>
                     <ChatIcon />
                   </IconButton>
                   <IconButton>
                     <MoreVertIcon />
                   </IconButton>
                </div>   
            </div> 

            <div className="sidebar_search">
                <div className="searchContainer">
               <IconButton>
                   <SearchOutlined />
                </IconButton>
               <input placeholder="Search or start new chat" type="text" />
               </div>
            </div>

            <div classname="chats">
              <Sidebar_Chats addNewChat />
              <Sidebar_Chats />
              <Sidebar_Chats />
              <Sidebar_Chats />
              
            </div>

        </div>
    )
}

export default Sidebar
