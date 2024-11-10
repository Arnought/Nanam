import React from "react";
import './HomeStyle.css';

export default function MenuCard1(props){
    return (
      <div class="MenuContCard">
      <img src={props.imgMenuCard1} alt={props.altMenuCard1} class="ImgMenu"></img>
      <div class="MenuTxt"><h2 class="Title">{props.MenuName1}</h2><p>{props.MenuDescript1}</p></div>
      </div>
    );
}