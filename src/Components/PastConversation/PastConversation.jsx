/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./PastConversation.css"
import ConvoCard from '../ConvoCard/ConvoCard';
import { ThemeContext } from "../../AllContexts";
import Dropdown from '../Dropdown/DropDown';



export default function PastConversation() {
    const [convos, setConvos] = useState([]);

    useEffect(()=> {
        loadConvos();
    }, []);
    
    const loadConvos = () => {
        const allConvos = window.localStorage.getItem("pastConversations");
        if(allConvos) setConvos(JSON.parse(allConvos));
        console.log(allConvos)
    }
    const displayCards = () => convos.map(item => {
        const {id, conversation} = item;
        return <ConvoCard id={id} key={id} conversation={conversation} />
    });

    return (
        <div className='PastConvo'>
            <h4>Conversation History</h4>
            <Dropdown />
            <div className='pastConvoBody'>
                {convos.length ? displayCards() : <h2>No Past Conversations Found</h2> }
            </div>
        </div>
    );
};