/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ThemeContext } from "../../AllContexts";
import Button from "../Button/Button";
import icon1 from "../assets/logo.png";
import penIcon from "../assets/editIcon.png";
import closeBlackIcon from "../assets/closeBlack.svg";
import closeWhiteIcon from "../assets/closeWhite.svg";
import "./SideBar.css";


export default function SideBar(props){
    const { handleSideBar, sidebarON, handlePastConvo, newChatClick } = props;
    const [theme, setTheme] = useContext(ThemeContext);

    const sideBarForLarge = () => {
        return (
            <aside className={`SideBar SideBarTheme-${theme} SideBar-large`}>
                <div onClick={newChatClick} className={`sideBarHead sideBarHeadTheme=${theme}`}>
                    <img src={icon1} alt="app icon" className='appLogo'/>
                    <h2>New Chat</h2>
                    <img src={penIcon} alt='pen icon' className='penIcon'/>
                    
                </div>
                <div className='sideBarBody'>
                    <Button clickFunction={handlePastConvo} text={"Past Conversations"} customClass="pastConvo"/>
                </div>
            </aside>
        )}


        const sideBarForSmall = () => {
            return (
                <aside className={`SideBar SideBarTheme-${theme} SideBar-small`}>
                    <div onClick={newChatClick} className={`sideBarHead sideBarHeadTheme=${theme}`}>
                        <img src={icon1} alt="app icon" className='appLogo'/>
                        <h2>New Chat</h2>
                        <img src={penIcon} alt='pen icon' className='penIcon'/>
                        
                    </div>
                    <div className='sideBarBody'>
                        <Button clickFunction={handlePastConvo} text={"Past Conversations"} customClass="pastConvo"/>
                    </div>
                    {
                        sidebarON ? 
                        <img onClick={handleSideBar} src={closeBlackIcon} alt="close button" className='closeSideBarButton'/>
                        :
                        null
                    }
                </aside>
            )
        }

    return(
        <>
            {sideBarForLarge()}
            {sidebarON ? sideBarForSmall() : null}
        </>
    );
}