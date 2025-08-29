import React, { useEffect, useState } from 'react';
import styles from './ArcheskyHeader.module.css';
import menu from '../../assets/img/Menu1.svg';
import { Link } from 'react-router-dom';

function ArcheskyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.archeskyHeader} ${isScrolled ? styles.scrolled : ""}`}>
        <div>
          <img src={menu} alt='메뉴' />
          <h1>Archesky</h1>
        </div>
        <nav>
          <ul className={styles.menus}>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>Service</li>
            <li>Portofolio</li>
            <li>How we works</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default ArcheskyHeader;
