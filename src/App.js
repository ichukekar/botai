import React, { useState } from "react";
import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import { ThemeContext } from "./AllContexts";
import likeOutlinedIcon from "./Components/assets/like-outline-black.svg";
import dislikeOutlinedIcon from "./Components/assets/dislike-outline-black.svg";
import likeFilledIcon from "./Components/assets/like-filled-black.svg";
import dislikeFilledIcon from "./Components/assets/dislike-filled-black.svg";
import { updateByLikeDislike } from './functions/functions';

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);

  const iconsData = {likeOutlinedIcon, dislikeOutlinedIcon, likeFilledIcon, dislikeFilledIcon};

  const handleSideBar = () => setSideBarON(!sidebarON);

  const addChatMsg = (userMsg, botReply) => {
    setCurrentChat([...currentChat, userMsg, botReply]);
  }

  const newChatClick = () => {
    //save current chat to pastConversations
    //setCurrentChat to empty []
    setCurrentChat([]);
    setPastConvo(false);
  }

  const clearCurrentChat = () => setCurrentChat([]);
  const handlePastConvo = () => setPastConvo(!pastConvo);
  const likeDislikeReply = (chatCardId, reaction) => setCurrentChat(updateByLikeDislike(chatCardId, reaction, currentChat, iconsData));

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
      <SideBar 
        newChatClick={newChatClick} 
        handleSideBar={handleSideBar} 
        sidebarON={sidebarON} 
        handlePastConvo={handlePastConvo}
      />
      <HomePage 
        likeDislikeReply={likeDislikeReply} 
        pastConvo={pastConvo} 
        clearCurrentChat={clearCurrentChat} 
        addChatMsg={addChatMsg} 
        currentChat={currentChat} 
        handleSideBar={handleSideBar} 
        sidebarON={sidebarON}
      />
      </main>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
