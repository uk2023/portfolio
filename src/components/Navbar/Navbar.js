// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {/* Add your menu items here */}
        <li className='nav__list-item'>
          <a
            href='#projects'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Projects
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#skills'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Skills
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#contact'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
