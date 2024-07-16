/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import logo from "../assets/logo.png";
import Card from "../Card/Card";
import "./DefaultHomePage.css";
import { ThemeContext } from "../../AllContexts";

const cardText1 = "Hi, what is the weather";
const cardText2 = "Hi, what is my location";
const cardText3 = "Hi, what is the temperature";
const cardText4 = "Hi, how are you";
const subText = "Get immediate AI generated response";

export default function DefaultHomePage({handleFormInput}){
    const [theme, setTheme] = useContext(ThemeContext)
    return(
        <div className={`Intro IntroTheme-${theme}`}>
        <div className='introQuestion'>
            <h1>How Can I Help You Today?</h1>
            <img src={logo} alt="bot ai"/>
        </div>
        <div className='introCards'>
            <Card handleFormInput={handleFormInput} mainText={cardText1} subText={subText}/>
            <Card handleFormInput={handleFormInput} mainText={cardText2} subText={subText}/>
            <Card handleFormInput={handleFormInput} mainText={cardText3} subText={subText}/>
            <Card handleFormInput={handleFormInput} mainText={cardText4} subText={subText}/>
        </div>
        </div>
    );
}