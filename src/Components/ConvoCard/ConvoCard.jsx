/* eslint-disable no-unused-vars */
import React from 'react';

import "./ConvoCard.css"

import ChatCard from '../ChatCard/ChatCard';

import { ThemeContext } from '../../AllContexts';

const ConvoCard = ({id, conversation}) => {
    //functions
    const displayCards = () => {
        return conversation.map(card => {
            const { icon, name, message, time, id, like, dislike, starColor, feedback } = card;
            return <ChatCard 
                        like={like} 
                        dislike={dislike} 
                        customClass="insidePast" 
                        key={id} 
                        icon={icon} 
                        name={name} 
                        message={message} 
                        time={time}
                        starColor={starColor}
                        feedback={feedback}
                    />
            })
    }
    return (
        <div className='ConvoCard'>
            {displayCards()}
        </div>
    )
}

export default ConvoCard;