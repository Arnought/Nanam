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
                    <h1 class="BaybayinTitle">Baybayin*</h1>
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

            <div class="MenuTitle">
                    <div>
                    <h1 class="MainTitle">Menu</h1>
                    <h1 class="BaybayinTitle">Baybayin*</h1>
                    </div>
            </div>

            <div>
                <div id="MenuMainCont"class="MainContDes">
                    <div class="DesMain">
                        <div class="MenuCont">
                        
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div id="MenuMainCont"class="MainContDes">
                    <div class="DesMain">
                        <div class="MenuCont">
                        
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    );
}