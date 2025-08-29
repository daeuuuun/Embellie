import React from 'react';
import styles from './ArcheskyVisual.module.css';
import CountUp from 'react-countup';
import person from '../../assets/img/image.png';
import checklist from '../../assets/img/Checklist.png';
import money from '../../assets/img/Money Bag.png';
import announcement from '../../assets/img/Announcement.png';
import presentation from '../../assets/img/Business Presentation.png';
import report from '../../assets/img/Business Report.png';
import chart from '../../assets/img/chart.png';


function ArcheskyVisual() {
  const contents = [
    { img: checklist, title: "Business Planning", sub: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit."},
    { img: money, title: "Financial Planning", sub: "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit."},
    { img: announcement, title: "Digital Marketing", sub: "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit."},
    { img: presentation, title: "Market Analysis", sub: "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit."}
  ]

  return (
    <>
      <main className={styles.archeskyMain}>
        <div className={styles.leftContents}>
          <div className={styles.textArea}>
            <div className={styles.textBox}>
              <h2 className={styles.visualH2}>
                <span>Smart</span> Business<br /> with <span>Smart</span> People
              </h2>
            </div>
            <p>
              Grow your business to the next level to improve your <br />business performance to stay competitive
            </p>
            <button className={styles.discussBtn}>Let’s Discuss</button>
          </div>

          <div className={styles.numbersDiv}>
            <div className={styles.number}>
              <span>
                <CountUp end={10} duration={2} />+
              </span>
              <p>Years Experience</p>
            </div>
            <div className={styles.number}>
              <span>
                <CountUp end={891} duration={2} />
              </span>
              <p>Cases Solved</p>
            </div>
            <div className={styles.number}>
              <span>
                <CountUp end={263} duration={2} />
              </span>
              <p>Business Partners</p>
            </div>
          </div>
        </div>

        <div className={styles.rightContents}>
          <div className={styles.rightBack}>
            <img src={person} alt='인물' />
          </div>
        </div>

        <div className={styles.bottomContents}>
          <div className={styles.bottomBox}>
            {contents.map((content, index) => (
              <div key={index} className={styles.contentBox}>
                <img src={content.img} alt={content.title}/>
                <span>{content.title}</span>
                <p>{content.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles.leftIcon}>
            <img src={report} alt='Monthly Stats' />
          </div>
          <div className={styles.rightBox}>
            <div className={styles.textBox}>
              <span className={styles.title}>Monthly Stats</span>
              <span className={styles.percent}>+25%</span>
            </div>
            <img src={chart} alt='그래프' />
          </div>
        </div>
      </main>
    </>
  );
}

export default ArcheskyVisual;
