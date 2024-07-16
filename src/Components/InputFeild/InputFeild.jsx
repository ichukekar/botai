import React, { useContext, useState } from "react";
import "./InputFeild.css";
import { ThemeContext } from "../../AllContexts";
import Button from "../Button/Button";

export default function InputFeild(props){
    const { handleFormInput, saveChat } = props;
    const [text, setText] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [theme, setTheme] = useContext(ThemeContext);
 
    const handleSubmit = event => {
        event.preventDefault();
        handleFormInput(text);
        setText("");
    }
    return (
        <div className='Form-wrapper'>
            <form className='Form' onSubmit={handleSubmit}>
                <input value={text} onChange={e => setText(e.target.value)} required />
                <Button text="ask" type="submit" />
            </form>
            <Button text="save" clickFunction={saveChat}/>
        </div>
    );
};