import React from 'react';
import SoulTravelHeader from '../../components/SoulTravelHeader/SoulTravelHeader';
import SoulTravelVisual from '../../components/SoulTravelVisual/SoulTravelVisual';
import styles from './SoulTravel.module.css';

function SoulTravel() {
  return (
    <div className={styles.soulBack}>
      <SoulTravelHeader />
      <SoulTravelVisual />
    </div>
  );
}

export default SoulTravel;
