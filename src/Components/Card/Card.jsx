/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../../AllContexts";

export default function Card(props){
    const { mainText, subText, handleFormInput } = props;
    const [theme, setTheme] = useContext(ThemeContext);

    return(
        <div className={`SuggestCard SuggestCardTheme-${theme}`} onClick={()=> handleFormInput(mainText)}>
            <span className='SuggestCard-mainText'>{mainText}</span>
            <span className='SuggestCard-subtext'>{subText}</span>
        </div>
       
    );
}