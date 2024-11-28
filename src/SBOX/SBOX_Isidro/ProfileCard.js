import React from "react";
import './about.css';

export default function ProfileCard(props){
    return (
        <div id="container">
            <img src={props.img} alt={props.alt} id="pfp"></img>
            <p id="name"><strong>{props.name}</strong></p>
        </div>
    );
}