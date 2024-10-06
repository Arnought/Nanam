import React from 'react';
import Navigation from './Navigation.js';
import "./HomeStyle.css";

export default function Home(){
    return (
        <div>
            <Navigation />



            <div class="MainContDes">
                <div class="DesMain">
                    <div>
                    <h1 class="MainTitle">NANAM</h1>
                    <h1 class="BaybayinTitle">NANAM</h1>
                    </div>
                </div>


                <div class="DesMain">
                    <div id="cont1" class="ColorCont">

                    </div>
                    <div class="ColorCont">
                        <div class="InfoTxt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                        <img src="/Assets/image.png" alt="food" class="ImgInfo"></img>
                    </div>
                </div>
            </div>

            <div class="MenuBGCont">
                
                    <div class="MenuCenter">
                        <div class="MenuTitle">
                            <div>
                            <h1 class="MainTitle">Menu</h1>
                            <h1 class="BaybayinTitle">Pagpipilian</h1>
                            </div>
                        </div>

                            <div class="DesMain">
                                <div class="MenuCont">
                                    <div class="MenuContCard">
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu"></img>
                                        <div class="MenuTxt"><h2 class="MainTitle">ITEM 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                    </div>

                                    <div class="MenuContCard">
                                        <div class="MenuTxt"><h2 class="MainTitle">ITEM 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="DesMain">
                                <div class="MenuCont">
                                    <div class="MenuContCard">
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu"></img>
                                        <div class="MenuTxt"><h2 class="MainTitle">ITEM 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                    </div>

                                    <div class="MenuContCard">
                                        <div class="MenuTxt"><h2 class="MainTitle">ITEM 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        <img src="/Assets/image.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>
        </div>
    );
}