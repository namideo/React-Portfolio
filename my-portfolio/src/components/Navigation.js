import React from 'react';

    function Navigation({ currentPage, handlePageChange }) {
        return (
          <ul className="links">
            <li><a href="#About-Me" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a></li>
            <li><a href="#Work"onClick={() => handlePageChange('Work')}className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Work</a></li>
            <li><a href="https://docs.google.com/document/d/1PNZUu_1SKusdyYGTgADt8nkzXUwfCI5wlc4iJBGvH6c/edit?usp=sharing" target="_blank">Resume</a></li>
            <li><a href="#contactInfo"onClick={() => handlePageChange('Contact')}className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
          </ul>
        );
      }

export default Navigation;