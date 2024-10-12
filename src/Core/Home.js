import React from 'react';
import Navigation from './Navigation.js';
import "./HomeStyle.css";

export default function Home(){
    document.title = "Home";
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
                                <img src="/Assets/FoodImg/TableFood.png" alt="food" class="ImgInfo"></img>
                            </div>
                        </div>
                        <img src="/Assets/Shapes/LessPoint.png" alt="4Star" class="LessPointElem"></img>
                    </div>
                </div>

            </div>
            


            <div class="MenuBGCont">
                <div class="MenuMain1">
                    <div class="ShapeSideMenu">
                        <img src="/Assets/Shapes/MorePoint.png" alt="MorePoint" class="MorePoint"></img>
                        <img src="/Assets/Shapes/Stamp.png" alt="Stamp" class="Stamp" id="Stamp2"></img>
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
                                            <img src="/Assets/FoodImg/Liempo.png" alt="food" class="ImgMenu"></img>
                                            <div class="MenuTxt"><h2 class="Title">Adobong Manok</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        </div>

                                        <div class="MenuContCard">
                                            <div class="MenuTxt"><h2 class="Title">Sinigang</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                            <img src="/Assets/FoodImg/Sisig.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                        </div>
                                    </div>
                                    <img src="/Assets/Shapes/4Star.png" alt="4Star" class="Star4Elem"></img>
                                </div>
                                
                                <div class="DesMain" id="TopMenu2">
                                    <img src="/Assets/Shapes/Diamond.png" alt="Diamond" class="Diamond"></img>
                                    
                                    <div class="MenuCont">
                                        <div class="MenuContCard">
                                            <img src="/Assets/image.png" alt="food" class="ImgMenu"></img>
                                            <div class="MenuTxt"><h2 class="Title">Dinuguan</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                        </div>

                                        <div class="MenuContCard">
                                            <div class="MenuTxt"><h2 class="Title">Kare-kare</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p></div>
                                            <img src="/Assets/image.png" alt="food" class="ImgMenu" id="ImgMenuRight"></img>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>

                    <div class="ShapeSideMenu" id="ShapeSideR">
                        <img src="/Assets/Shapes/FatStar.png" alt="FatStar" class="FatStar"></img>
                        <img src="/Assets/Shapes/3Star.png" alt="3Star" class="Star3"></img>
                        <img src="/Assets/Shapes/Circle.png" alt="Circle" class="Circle"></img>
                        </div>
                </div>
 
                <div class="MenuDown">
                            <div class="DownContMenu">

                                <div class="Title"><h2 class="MenuDownTitle">MEALS</h2></div>
                                <div class="MenuDown2">
                                    <div class="MenuDownCard">
                                        <h2 class="Title"  id="MenuDownTitle1">SINGLES</h2>
                                        <ul>
                                            <li>Tocino</li>
                                            <li>Pares</li>
                                            <li>Tortang Talong</li>
                                            <li>Sisig</li>
                                        </ul>

                                    </div>
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">SEAFOOD</h2>
                                        <ul>
                                            <li>Daing</li>
                                            <li>Sinigang na Hipon</li>
                                            <li>Tahong</li>
                                            <li>Halabos na Hipon</li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="MenuDown2">
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">MEAT</h2>
                                        <ul>
                                            <li>Tinolang Manok</li>
                                            <li>Inasal</li>
                                            <li>Lechon Kawali</li>
                                            <li>Liempo</li>
                                        </ul>

                                    </div>
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">RICE</h2>
                                        <ul>
                                            <li>Regular rice</li>
                                            <li>Fried Rice</li>
                                            <li>Risotto</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div id="MenuDownDrink" class="DownContMenu">
                                <div class="MenuDown2" id="DrinkDown2">
                                    <div class="Title"><h2 class="MenuDownTitle" id="DrinksTitle">DRINKS</h2></div>
                                            <div class="MenuDownCard" id="DrinkCard">
                                            <h2 class="Title"  id="MenuDownTitle2">ALCHOHOLIC</h2>
                                                <ul class="DrinkList">
                                                    <li>Food1</li>
                                                    <li>Food2</li>
                                                    <li>Food3</li>
                                                    <li>Food4</li>
                                                </ul>

                                            </div>
                                            <div class="MenuDownCard" id="DrinkCard">
                                            <h2 class="Title"  id="MenuDownTitle2">SOBER</h2>
                                                <ul class="DrinkList">
                                                    <li>Food1</li>
                                                    <li>Food2</li>
                                                    <li>Food3</li>
                                                    <li>Food4</li>
                                                </ul>

                                            </div>
                                    </div>
                                </div>


                </div>
            </div>

        </div>
    );
}