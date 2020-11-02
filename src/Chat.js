import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import {useState, useEffect} from "react";
import "./Chat.css";

function Chat() {
    const [input, setInput]  = useState("");
    const [seed, setseed] = useState("");

    useEffect(()=> {
        setseed(Math.floor(Math.random()*5000));
    }, []);
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log("you typed >>> ",input)
        setInput('');
     }
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="info">
          <Avatar
            className="chatAvatar"
            src="https://cdn.statically.io/img/indiapur.com/wp-content/uploads/2019/06/whatsapp-dp-5.jpg?f=auto"
          />
          <p>Room name</p>
        </div>
        <div className="header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatSpace">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span classname="chat_name"> Nipun </span>
          Hi..i am nipun
          <span classname="chat_timestamp"> 7:30pm </span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <AttachFileIcon fontSize="20px" />

        <form>
          <input value = {input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button type ="submit"  onClick = {sendMessage}>Send message</button>
        </form>
        <MicIcon classname="mic_icon" />
      </div>
    </div>
  );
}

export default Chat;
