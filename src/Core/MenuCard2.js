import React from "react";
import './HomeStyle.css';

export default function MenuCard2(props){
    return (
      <div class="MenuContCard">
        <div class="MenuTxt"><h2 class="Title">{props.MenuName2}</h2><p>{props.MenuDescript2}</p></div>
        <img src={props.imgMenuCard2} alt={props.altMenuCard2} class="ImgMenu" id="ImgMenuRight"></img>
      </div>
    );
}