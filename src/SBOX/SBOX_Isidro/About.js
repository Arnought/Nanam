import React from 'react';
import './about.css';
import Navigation from '../../Core/Navigation.js';
import ProfileCard from './ProfileCard.js';

const About = () => {
    document.title = "About Us";
    return (
        <div>
            <Navigation />
            
            <div id="main">
                <h1 class="heading">ABOUT US</h1>

                <div id="info" class="main-div">
                    <div id="img-container">
                    <img src="/Assets/image.png" alt='Food' className="food"></img>
                    </div>
                    
                    <div id="description">
                    <p>Nanam's warm, welcoming ambiance creates a cozy yet stylish dining experience perfect for family gatherings, friendly meals, or special occasions. This is a place where Filipino culture and culinary passion come together. Stop by and eat with us at Panay Ave, Quezon City.</p>
                    </div>
                </div>
                <br /><br /><br /><br />
                <div id="team" class="main-div">

                <h1>THE TEAM</h1>

                <div id="horizontal-div">
                    <div id="profile">
                    <ProfileCard img="/Assets/pfp.png"
                    alt="IC"
                    name="Chris Iven Dela Cruz" />
                    </div>

                    <div id="profile">
                    <ProfileCard img="/Assets/pfp.png"
                    alt="Carl"
                    name="Carl Alec Gutierrez" />
                    </div>

                    <div id="profile">
                    <ProfileCard img="/Assets/pfp.png"
                    alt="Khristine"
                    name="Khristine Khyle Isidro" />
                    </div>
                    
                    <div id="profile">
                    <ProfileCard img="/Assets/pfp.png"
                    alt="Aaron"
                    name="Aaron Smith Magat" />
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default About;