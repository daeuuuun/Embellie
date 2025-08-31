import React from 'react';
import styles from './SoulTravelHeader.module.css';
import { Link } from 'react-router-dom';

function SoulTravelHeader() {
  return (
    <>
      <header className={styles.soulHeader}>
        <h1>Soul<span>Travel.</span></h1>

        <nav>
          <ul>
            <li>
              <Link to='/'>
                Destination
              </Link>
            </li>
            <li>Package</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className={styles.btns}>
          <button className={styles.upBtn}>Sign Up</button>
          <button className={styles.inBtn}>Sign In</button>
        </div>
      </header>
    </>
  );
}

export default SoulTravelHeader;
