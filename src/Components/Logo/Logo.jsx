import React from "react";
import LogoImg from "../assets/logo.png";
import "./Logo.css";

export default function Logo(){
    return(
        <div className="logo">
            <img src={LogoImg} alt="logo"/>
        </div>
    );
}