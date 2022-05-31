import React from 'react';
import ProfilePic from '../assets/Profile.jpg';


function About() {
    return (
        
        <div class='About-Me'> 
             <div>
                <img class='column profile-pic' src= {ProfilePic} alt="profile" /> 
             </div>
             <div class='column Bio'>
                 <h1><strong>About Me</strong></h1>
                 <br></br>
                 <br></br>
                 <br></br>
                <p>Welcome to my page! I am a Georgia native and up and coming developer. I have spent most of my adult life in the retail and restaurant industries. Having worked in hospitality for a long time I am ready to take my life and abilities into new territory. Some of my hobbies include running and video editing.
                </p>
             </div>
        </div>
    );
}

export default About;