import React from 'react'
import Navigation from './Navigation'

function Header({ currentPage, handlePageChange }) {
    return (
    <header>
        
        <div className='column name'>
        <h1><strong>Nick Amideo</strong></h1>
       </div>
        <div className='column'>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
        
    </header>
    );
}

export default Header;