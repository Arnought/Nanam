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
                <h1>ABOUT US</h1>

                <div id="info" class="main-div">
                    <div id="img-container">
                    <img src="/Assets/image.png" alt='Food' className="food"></img>
                    </div>
                    <div id="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo.</p>
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