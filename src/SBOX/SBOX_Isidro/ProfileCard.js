import React from "react";
import './about.css';

export default function ProfileCard(props){
    return (
        <div id="container">
            <p id="name"><strong>{props.name}</strong></p>
        </div>
    );
}