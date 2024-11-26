import React, { useState } from 'react';
import Navigation from './Navigation.js';
import "./HomeStyle.css";
import MenuCard1 from './MenuCard1.js';
import MenuCard2 from './MenuCard2.js';
// id: String,
//   imgSrc: String,
//   imgAlt: String,
//   name: String,
//   description: String,

const HomePage = ({ MenuItem }) => {
// export default function Home(){
    const [imgSrc, setImgSrc] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    fetch('http://localhost:5000/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imgSrc, imgAlt, name, description }),
      })
 
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
                                <div class="InfoTxt"><p>Nanam is a modern Filipino restaurant that brings the rich, vibrant flavors of the Philippines to life in every dish. This restaurant prides itself on using fresh, locally sourced ingredients, delivering bold, savory, and comforting flavors that embody the essence of Filipino cooking.</p></div>
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
                                        <MenuCard1 imgMenuCard1= {setImgSrc}
                                        altMenuCard1={setImgAlt}
                                        MenuName1={setName}
                                        MenuDescript1={setDescription}
                                        />

                                        <MenuCard2 imgMenuCard2={setImgSrc}  
                                        altMenuCard2={setImgAlt}
                                        MenuName2={setName}
                                        MenuDescript2={setDescription}
                                        />
                                        {/* <MenuCard1 imgMenuCard1="/Assets/FoodImg/Liempo.png"  
                                        altMenuCard1="foodLiempo"
                                        MenuName1="Liempo"
                                        MenuDescript1="Liempo is marinated in a mixture of crushed garlic, vinegar, salt, and pepper before being grilled. It is then served with soy sauce and vinegar or vinegar with garlic."
                                        />

                                        <MenuCard2 imgMenuCard2="/Assets/FoodImg/Sisig.png"  
                                        altMenuCard2="foodSisig"
                                        MenuName2="Sisig"
                                        MenuDescript2="Sisig is a dish made from pork jowl and ears, pork belly, and chicken liver, which is usually seasoned with calamansi, onions, and chili peppers. This dish is a staple of Kapampangan cuisine."
                                        /> */}
                                        </div>
                                    <img src="/Assets/Shapes/4Star.png" alt="4Star" class="Star4Elem"></img>
                                </div>
                                
                                <div class="DesMain" id="TopMenu2">
                                    <img src="/Assets/Shapes/Diamond.png" alt="Diamond" class="Diamond"></img>
                                    
                                    <div class="MenuCont">
                                        <MenuCard1 imgMenuCard1= {setImgSrc}
                                        altMenuCard1={setImgAlt}
                                        MenuName1={setName}
                                        MenuDescript1={setDescription}
                                        />

                                        <MenuCard2 imgMenuCard2={setImgSrc}  
                                        altMenuCard2={setImgAlt}
                                        MenuName2={setName}
                                        MenuDescript2={setDescription}
                                        />
                                        {/* <MenuCard1 imgMenuCard1="/Assets/FoodImg/Tinolang-Manok.png"  
                                        altMenuCard1="foodTinolangManok"
                                        MenuName1="Tinolang Manok"
                                        MenuDescript1="Tinolang Manok is a well-loved Filipino comfort food dish. It's a great tasting and healthy dish for you and your family."
                                        />

                                        <MenuCard2 
                                        id = ""
                                        imgMenuCard2="/Assets/FoodImg/adobo.png"  
                                        altMenuCard2="foodAdobong Manok"
                                        MenuName2="Adobong Manok"
                                        MenuDescript2="Adobo is meat marinated in soy sauce and vinegar, one of Philippines' most popular dish and loved by many. Because Adobo recipes varies, this recipe includes garlic, potatoes, and black pepper."
                                        /> */}
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
                                            <li>Arroz caldo</li>
                                            <li>Longganisa</li>
                                            <li>Lugaw</li>
                                            <li>Tocino</li>
                                            <li>Pares</li>
                                            <li>Pritong Itlog</li>
                                            <li>Tortang Giniling</li>
                                            <li>Tortang Talong</li>
                                        </ul>

                                    </div>
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">SEAFOOD</h2>
                                        <ul>
                                            <li>Daing</li>
                                            <li>Escabeche</li>
                                            <li>Halabos na Hipon</li>
                                            <li>Kilawin na Isda</li>
                                            <li>Sinaing na Isda</li>
                                            <li>Sinigang na Hipon</li>
                                            <li>Tahong</li>
                                            <li>Tuyo/Danggit</li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="MenuDown2">
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">MEAT</h2>
                                        <ul>
                                            <li>Afritada</li>
                                            <li>Dinuguan</li>
                                            <li>Inasal</li>
                                            <li>Lechon Kawali</li>
                                            <li>Lechon Paksiw</li>
                                            <li>Lumpia</li>
                                            <li>Menudo</li>
                                            <li>Kare-kare</li>
                                        </ul>

                                    </div>
                                    <div class="MenuDownCard">
                                    <h2 class="Title"  id="MenuDownTitle1">RICE</h2>
                                        <ul>
                                            <li>Regular rice</li>
                                            <li>Fried Rice</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div id="MenuDownDrink" class="DownContMenu">
                                <div class="MenuDown2" id="DrinkDown2">
                                    <div class="Title"><h2 class="MenuDownTitle" id="DrinksTitle">DRINKS</h2></div>
                                            <div class="MenuDownCard" id="DrinkCard">
                                            <h2 class="Title"  id="MenuDownTitle2">ALCOHOLIC</h2>
                                                <ul class="DrinkList">
                                                    <li>Beer</li>
                                                    <li>Gin</li>
                                                    <li>Rum</li>
                                                    <li>Brandy</li>
                                                </ul>

                                            </div>
                                            <div class="MenuDownCard" id="DrinkCard">
                                            <h2 class="Title"  id="MenuDownTitle2">SOBER</h2>
                                                <ul class="DrinkList">
                                                    <li>Iced Tea</li>
                                                    <li>Calamansi</li>
                                                    <li>Orange</li>
                                                    <li>Lemonade</li>
                                                </ul>

                                            </div>
                                    </div>
                                </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;