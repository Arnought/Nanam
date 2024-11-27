import React, {useState, useEffect} from 'react';
import Navigation from './Navigation.js';
import "./HomeStyle.css";


const HomePage = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
          try {
            const response = await fetch('http://localhost:5000/home');
            const data = await response.json();
            setMenuItems(data);
          } catch (error) {
            console.error('Error fetching menu items:', error);
          }
        };
    
        fetchMenuItems();
      }, []);
 
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


                            <div className="DesMain" id="TopMenu1">
                                <div className="MenuCont">
                                    {menuItems.map((item, index) => (
                                    <div key={item._id || index} className="MenuContCard">
                                        <img src={item.imgSrc} alt={item.imgAlt} className="ImgMenu" />
                                            <div className="MenuTxt">
                                                <h2  className="Title">{item.name}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                    </div>
                                    ))}
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