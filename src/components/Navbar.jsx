import React from 'react';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src='src\assets\images\logo.svg'
            className='nav-logo'
            alt='backroads'
          />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          <li>
            <a href='#home' className='nav-link'>
              home
            </a>
          </li>

          <li>
            <a href='#about' className='nav-link'>
              about
            </a>
          </li>

          <li>
            <a href='#services' className='nav-link'>
              services
            </a>
          </li>

          <li>
            <a href='#tours' className='nav-link'>
              tours
            </a>
          </li>
        </ul>

        {/* social links */}
        <SocialLink />
      </div>
    </nav>
  );
};

export default Navbar;
