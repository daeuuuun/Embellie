import React from 'react';
import styles from './Header.module.css';
import shopping from '../../assets/img/Shopping Bag.svg';
import menu from '../../assets/img/Menu.svg';
import circle from '../../assets/img/Ellipse notif.png';

function Header() {
  return (
    <>
      <header>
        <h1>Emb<span>ellie</span></h1>

        <nav>
          <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>Categories</li>
            <li>Galleries</li>
            <li>About</li>
          </ul>
        </nav>

        <div className={styles.subMenu}>
          <ul className={styles.lang}>
            <li>EN</li>
            <li>ID</li>
          </ul>

          <ul>
            <li>
              <img src={shopping} alt='장바구니' className={styles.shopping} />
              <img src={circle} alt='장바구니 강조' className={styles.shopCircle} />
            </li>
            <li>
              <img src={menu} alt='메뉴' />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
