// Footer.js

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__content'>
      <div className='footer__social'>
        <a href='https://github.com/rajshekhar26' className='link footer__link' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/rajshekhar26/' className='link footer__link' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
      </div>
      <p className='footer__text'>
        Created By  UJJWAL KUMAR | © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
