import React from 'react'
import Navigation from './Navigation'

function Header() {
    return (
    <header>
        
        <div class='column name'>
        <h1><strong>Nick Amideo</strong></h1>
       </div>
        <div class='column'>
        <Navigation />
        </div>
        
       
        
    </header>
    );
}

export default Header;