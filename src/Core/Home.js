import React from 'react';
import Navigation from './Navigation.js';
import "./HomeStyle.css";

export default function Home(){
    return (
        <div>
            <Navigation />


            
            <div class="MainCont">
                <img src="/Assets/Shapes/Stamp.png" alt="Stamp" class="Stamp"></img>
                <div class="MainContDes">
                    <div class="DesMain">
                        <div>
                        <h1 class="Title" id="MainTitle">NANAM</h1>
                        <h1 class="BaybayinTitle" id="MainTitleBayBay">NANAM</h1>
                        </div>
                    </div>

                    <div>
                        <div class="DesMain">
                            <div id="cont1" class="ColorCont">

                            </div>
                            <div class="ColorCont">
                                <div class="InfoTxt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                <img src="/Assets/image.png" alt="food" class="ImgInfo"></img>
                            </div>
                        </div>
                        <img src="/Assets/Shapes/LessPoint.png" alt="4Star" class="LessPointElem"></img>
                    </div>
                </div>

            </div>
            


            <div class="MenuBGCont">
                <div class="ShapeSideMenu">
                    <img src="/Assets/Shapes/MorePoint.png" alt="MorePoint" class="MorePoint"></img>
                    <img src="/Assets/Shapes/Star.png" alt="Star" class="Star"></img>
                </div>


                    <div class="MenuCenter">
                        <div class="Title">
                            <div>
                            <h1 class="Title" id="MenuTitle">Menu</h1>
                            <h1 class="BaybayinTitle" id="BaybayinTitleMenu">Pagpipilian</h1>
                            </div>
                        </div>

                            <div class="DesMain" id="TopMenu1">
                                
                                <div class="MenuCont">
                                    <div class="MenuContCard">
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu"></img>
                                        <div class="MenuTxt"><h2 class="Title">ITEM 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                    </div>

                                    <div class="MenuContCard">
                                        <div class="MenuTxt"><h2 class="Title">ITEM 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                    </div>
                                </div>
                                <img src="/Assets/Shapes/4Star.png" alt="4Star" class="Star4Elem"></img>
                            </div>
                            
                            <div class="DesMain" id="TopMenu2">
                                <img src="/Assets/Shapes/Diamond.png" alt="Diamond" class="Diamond"></img>
                                
                                <div class="MenuCont">
                                    <div class="MenuContCard">
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu"></img>
                                        <div class="MenuTxt"><h2 class="Title">ITEM 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                    </div>

                                    <div class="MenuContCard">
                                        <div class="MenuTxt"><h2 class="Title">ITEM 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div class="ShapeSideMenu">
                    <img src="/Assets/Shapes/FatStar.png" alt="FatStar" class="FatStar"></img>
                    <img src="/Assets/Shapes/Circle.png" alt="Circle" class="Circle"></img>
                </div>    

            </div>

        </div>
    );
}