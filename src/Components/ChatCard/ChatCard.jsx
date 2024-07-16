/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import ModalComp from '../Modal/Modal'; // Import the ModalComp component
import "./ChatCard.css";
import likeOutlined from "../assets/like-outline-black.svg";
import likeFilled from "../assets/like-filled-black.svg";
import dislikeOutlined from "../assets/dislike-outline-black.svg";
import dislikeFilled from "../assets/dislike-filled-black.svg";
import { ThemeContext } from "../../AllContexts";
import { updateByLikeDislike } from '../../functions/functions';
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const Thumbs = ({ likeDislikeReply, id, like, dislike, openModal }) => {
    return (
        <span className='thumbsWraper'>
            <img src={like} alt='like button' onClick={() => openModal('like', id)} />
            <img src={dislike} alt='dislike button' onClick={() => openModal('dislike', id)} />
        </span>
    );
}

const ChatCard = props => {
    const { name, message, time, icon, customClass, likeDislikeReply, id, like, dislike, currentChat, setCurrentChat } = props;
    const [theme] = useContext(ThemeContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const [starColor, setStarColor] =useState(Array(5).fill("white"));

    const openModal = (type, id) => {
        setModalType(type);
        setModalIsOpen(true);
        // const updatedChat = updateByLikeDislike(id, type, currentChat, {
        //     likeOutlinedIcon: likeOutlined,
        //     dislikeOutlinedIcon: dislikeOutlined,
        //     likeFilledIcon: likeFilled,
        //     dislikeFilledIcon: dislikeFilled
        // });
        // setCurrentChat(updatedChat);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalType(null);
        setFeedback(feedback);
        setRating(0);
        setStarColor(Array(5).fill("black"));
    };

    const handleSubmit = () => {
        console.log("submit clicked")
        const updatedChat = currentChat.map(card => {
            if(card.id===id){
                if(modalType==="like"){
                    return {...card, starColor};
                }
                else if(modalType==="dislike"){
                    return {...card, feedback};
                }
            }
            return card;
        }) 
        setCurrentChat(updatedChat);
        console.log(updatedChat)
        closeModal();
    };

    return (
        <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
            <span className='chatCardImage-wrapper'>
                <img src={icon} alt="" className='chatCardImage' />
            </span>
            <span className='chatCardTexts'>
                <span className='chatCardName'>{name}</span>
                <span className='chatCardMessage'>
                    <span className='messageAppear'>{message}</span>
                </span>
                <span className='chatCardTime'>
                    <span> {time} </span>
                    {name === "bot ai" ? <Thumbs like={like} dislike={dislike} likeDislikeReply={likeDislikeReply} id={id} openModal={openModal} /> : null}
                </span>
                {name === "bot ai" && (
                    <div className='reviewFeedback'>
                        {starColor[0] === "black" && (
                            <div className="reviewStar">
                                Ratings: {starColor.map((color, index) =>
                                    color === "black" ? <IoIosStar key={index} className="bigger-star black"  /> : <IoIosStarOutline key={index}  className="bigger-star white"/>
                                )}
                            </div>
                        )}
                        {feedback && <div>Feedback: {feedback}</div>}
                    </div>
                )}
            </span>
            <ModalComp
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                modalType={modalType}
                rating={rating}
                setRating={setRating}
                starColor={starColor}
                setStarColor={setStarColor}
                feedback={feedback}
                setFeedback={setFeedback}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default ChatCard;






















// import React, { useContext, useState } from 'react';
// import "./ChatCard.css";
// import { ThemeContext } from "../AllContexts";

// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';


// const Thumbs = ({likeDislikeReply, id, like, dislike}) => {
//     return (
//         <span className='thumbsWraper'>
//             <img src={like} alt='like button' onClick={()=>likeDislikeReply(id,"like")}/>
//             <img src={dislike} alt='dislike button' onClick={()=>likeDislikeReply(id,"dislike")}/>
//         </span>
//     )
// }

// const ChatCard = props => {
//     const { name, message, time, icon, customClass, likeDislikeReply, id, like, dislike } = props;
//     const [rate, setRate] = useState({});
//     const [theme, setTheme] = useContext(ThemeContext);

//     return (
//         <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
//             <span className='chatCardImage-wrapper'>
//                 <img src={icon} alt={`${name} icon`} className='chatCardImage'/>
//             </span>
//             <span className='chatCardTexts'>
//                 <span className='chatCardName'>{name}</span>
//                 <span className='chatCardMessage'>
//                     {/* <span className='typing'>typing...</span> */}
//                     <span className='messageAppear'>{message}</span>
//                 </span>
//                 <span className='chatCardTime'>
//                     <span> {time} </span>
//                     {name==="bot ai" ? <Thumbs like={like} dislike={dislike} likeDislikeReply={likeDislikeReply} id={id}/> : null}
//                 </span>
//             </span>
//         </div>
//     );
// };

// export default ChatCard;
