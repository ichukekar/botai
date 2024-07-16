/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import "./HomePage.css";
import menuIcon from "../assets/menu.svg";

import { ThemeContext } from "../../AllContexts";

import ChatBox from "../ChatBox/ChatBox";
import PastConversation from "../PastConversation/PastConversation";


export default function HomePage(props){
    const { handleSideBar, sidebarON, currentChat, addChatMsg, clearCurrentChat, pastConvo, likeDislikeReply } = props;
    
    const [theme, setTheme] = useContext(ThemeContext)

    return(
        <div className={`AppBody AppBodyTheme-${theme}`}>
             <div className='AppBodyHead'>
                 {
                     !sidebarON ? <img className="menu" onClick={handleSideBar} src={menuIcon} alt='menu icon' width={40} height={40} /> : null
                 }
                {pastConvo ? null: <h1>Bot AI</h1>} 
                {
                pastConvo ?
                <PastConversation />
                :
                <ChatBox likeDislikeReply={likeDislikeReply} clearCurrentChat={clearCurrentChat} addChatMsg={addChatMsg} currentChat={currentChat}/>
            }
            </div>
        </div>
    );
   
}