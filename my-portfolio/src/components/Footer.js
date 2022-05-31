import React from 'react';

function Footer() {
    return (
        <footer>
        <div class="Contact" id="contactInfo">
            
        <div><h3>Contact</h3></div>
   
        <div><i class="fa-solid fa-mobile-screen-button"></i> <strong>(404) 729-8051</strong></div> 
        
        <div><i class="fa-solid fa-envelope"></i> <a href="mailto:namideo@gmail.com"><strong>namideo@gmail.com</strong></a></div> 
        
        <div><i class="fa-solid fa-user-tie"></i> <strong><a href="https://www.linkedin.com/in/nick-amideo-767b3b39/" target="_blank">LinkedIn</a></strong></div>
    
        <div><i class="fa-solid fa-desktop"></i> <strong><a href="https://github.com/namideo" target="_blank">GitHub</a></strong></div>
    

    {/* <ul>
        <li>
        <a className="fa fa-github" href="https://github.com/namideo" target="_blank"></a>
        </li>
        <li>
        <a className="fa fa-linkedin" href="https://www.linkedin.com/in/nick-amideo-767b3b39/" target="_blank"></a>
        </li>
        <li>
        </li>
    </ul> */}

    </div>
    </footer>

    );

}

export default Footer;