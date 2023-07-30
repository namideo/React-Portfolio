import React from 'react';

    function Navigation({ currentPage, handlePageChange }) {
        return (
          <div className="links">
            <a href="#About-Me" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            <a href="#Work" onClick={() => handlePageChange('Work')}className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Work</a>
            <a href="https://docs.google.com/document/d/1k_m0bp0y-BZu5olOfYu_mUF33nP4D6tg/edit" target="_blank" className='nav-link'>Resume</a>
            <a href="#contactInfo" onClick={() => handlePageChange('Contact')}className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </div>
        );
      }

export default Navigation;