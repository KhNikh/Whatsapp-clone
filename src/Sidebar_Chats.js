import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import './Sidebar_Chats.css'

function Sidebar_Chats({ addNewChat }) {
    const [seed,setseed] = useState("");

    useEffect(()=>{
        setseed(Math.floor(Math.random()*100000));
    },[]);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){}
        //do someclever stuff
    };
    return !addNewChat ? (
        <div className = "sidebar_chats">
            <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat_info">
                <h2>Room name</h2>
                <p>last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="SidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default Sidebar_Chats
