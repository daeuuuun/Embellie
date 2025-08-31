import React from 'react';
import styles from './SoulTravelVisual.module.css';

function SoulTravelVisual() {
  return (
    <>
     <main className={styles.soulMain}>
      <div className={styles.leftArea}>
        <div className={styles.textArea}>
          <h2>
            Let's go!<br/> The <span>adventure</span> is waiting for you
          </h2>
          <p>
            Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides
          </p>
        </div>

        <div className={styles.rightArea}>

        </div>
      </div>
     </main>
    </>
  );
}

export default SoulTravelVisual;
