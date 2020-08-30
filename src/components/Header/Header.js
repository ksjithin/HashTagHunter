import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../Images/logo.png';

const Header = () => (
  <div className={styles.Header}>
    <div className="logo">
      <img src={logo} width="300" height="100" />

    </div>
    <div id={styles.one}><ul>      
      <li><a href="#All">All</a></li>
      <li><a href="/twitter">Twitter</a></li>
      <li><a href="#Linkedin">Linkedin</a></li>
      <li><a href="#Facebook">Facebook</a></li>
      <li><a href="#About">About</a></li>
    </ul></div>
  </div>
  
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
