/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from 'react-modal';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./Modal.css";
import Button from "../Button/Button";
import bulb from "../assets/bulb.png";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

Modal.setAppElement("#root");

const ModalComp = ({ isOpen, onRequestClose, modalType, rating, setRating, feedback, setFeedback, handleSubmit, starColor, setStarColor}) => {

    // const [starColor, setStarColor] = useState(Array(5).fill('white'));

    const handleStarClick = (starIndex) => {
        const newStarColor = starColor.map((color, index)=> index <=starIndex ? "black" : "white");
        setStarColor(newStarColor);
        console.log(newStarColor);
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Feedback Modal" className="Modal" overlayClassName="Overlay">
            {modalType === 'like' ? (
                <div className="like">
                    <h2 className="Rate">Rate this interaction</h2>
                    <div className="star">
                    {Array(5).fill().map((_, index) => (
                            <span key={index} onClick={() => handleStarClick(index)}>
                                {starColor[index] === 'black' ? (
                                    <IoIosStar className="bigger-star black" />
                                ) : (
                                    <IoIosStarOutline className="bigger-star white" />
                                )}
                            </span>
                        ))}
                    </div>
                    
                    <Stack spacing={1}>
                        <Rating name="rating" value={rating} onChange={(event, newValue) => setRating(newValue)} />
                    </Stack>
                    {/* <Button onClick={handleSubmit} text="Submit"/> */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : modalType === 'dislike' ? (
                <div className="dislike">
                    <div className="heading">
                        <img src={bulb} alt="bulb"/>
                        <h2>Provide additional feedback</h2>
                    </div>
                    
                    <textarea className="textArea" value={feedback} onChange={(e) => setFeedback(e.target.value)}  />
                    {/* <Button onClick={handleSubmit} text="Submit"/> */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : null}
        </Modal>
    );
};

export default ModalComp;