import React from 'react';
import styles from './Visual.module.css';
import play from '../../assets/img/icon.png';
import CountUp from 'react-countup';
import Banner from '../Banner/Banner';

function Visual() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.textArea}>
          <h2>Classy products for your home decoration</h2>
          <p>Any home decor elements you looking for is available here</p>

          <div className={styles.buttons}>
            <button className={styles.shopButton}>Shop Now</button>
            <button className={styles.playButton}>
              <img src={play} alt='재생버튼'></img>
              <span>Watch Video</span>
          </button>
          </div>

          <div className={styles.numbersDiv}>
            <div className={styles.number}>
              <span>
                <CountUp end={321} duration={2} />+
              </span>
              <p>Decoration Products</p>
            </div>
            <div className={styles.number}>
              <span>
                <CountUp end={25} duration={2} />+
              </span>
              <p>Awards Winnings</p>
            </div>
            <div className={styles.number}>
              <span>
                <CountUp end={15} duration={2} />+
              </span>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <Banner />


        <span className={styles.backText}>Embellie</span>
      </main>
    </>
  );
}

export default Visual;
