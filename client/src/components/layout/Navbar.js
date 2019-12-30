import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: faIdCardAlt
};
