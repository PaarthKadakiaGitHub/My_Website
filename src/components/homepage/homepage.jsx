import React , {useEffect, Component} from 'react';
import styles from './style.module.css'; // Import your CSS file here
import { gsap } from 'gsap';
import styled from 'styled-components'

import logoImg from './img/logo.png';
import backgroundImg from './img/background.png';
import fog7Img from './img/fog_7.png';
import mountain10Img from './img/mountain_10.png';
import fog6Img from './img/fog_6.png';
import mountain8Img from './img/mountain_8.png';
import fog5Img from './img/fog_5.png';
import mountain7Img from './img/mountain_7.png';
import mountain6Img from './img/mountain_6.png';
import fog4Img from './img/fog_4.png';
import mountain5Img from './img/mountain_5.png';
import fog3Img from './img/fog_3.png';
import mountain4Img from './img/mountain_4.png';
import mountain3Img from './img/mountain_3.png';
import fog2Img from './img/fog_2.png';
import mountain2Img from './img/mountain_2.png';
import mountain1Img from './img/mountain_1.png';
import sunRaysImg from './img/sun_rays.png';
import blackShadowImg from './img/black_shadow.png';
import fog1Img from './img/fog_1.png';
import mountain9Img from './img/mountain_9.png'; // Add this import


const Pmain = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`



class ParallaxWebsite extends Component {

  // useEffect(() => {})

  //   const parallaxElements = document.querySelectorAll(`.${styles.parallax}`);
  //   const timeline = gsap.timeline();

  //   Array.from(parallaxElements)
  //     .filter(el => !el.classList.contains("text"))
  //     .forEach((el) => {
  //       timeline.from(
  //         el,
  //         {
  //           translateY: `${el.offsetHeight / 4 - -el.dataset.distance}px`,
  //           duration: 3.5,
  //           ease: "power3.out",
  //         },
  //         "1"
  //       );
  //     });

  //   timeline.from(".text h1", {
  //     y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
  //     duration: 2,
  //   }, "2.5")
  //   .from(".text h2", {
  //     y: -150,
  //     opacity: 0,
  //     duration: 1.5,
  //   }, "3")
  //   .from(".hide", {
  //     opacity: 0,
  //     duration: 1.5,
  //   }, "3");
  //   return () => timeline.revert();


  render()
  {
  return (
    <html lang="en">
      <head>
        {/* ...head content */}
        <link rel="stylesheet" href={styles.style} />
      </head>
      <body className={styles.body}>
        <header className={`${styles.hide} ${styles.header}`}>
          <nav className={styles.nav}>
            <img src={logoImg} alt="Travelo" className={styles.logo} />
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="#">Projects</a>
              </li>
              <li>
                <a className={styles.a} href="#">About</a>
              </li>
              <li>
                <a className={styles.a} href="#">Contact</a>
              </li>
              
            </ul>
          </nav>
        </header>

  <Pmain>
      <div className={styles.shadow}></div>
          <img src={backgroundImg} className={`${styles.parallax} ${styles['bg-img']}`} data-distance="-75" />
          <img src={fog7Img} className={`${styles.parallax} ${styles['fog-7']}`} data-distance="850" />
          <img src={mountain10Img} className={`${styles.parallax} ${styles['mountain-10']}`} data-distance="1100" />
          <img src={fog6Img} className={`${styles.parallax} ${styles['fog-6']}`} data-distance="1400" />
         
          <div>
          <img
        src={mountain9Img}
        className={`${styles.parallax} ${styles['mountain-9']}`}
        data-distance="1700"
      />
      <img
        src={mountain8Img}
        className={`${styles.parallax} ${styles['mountain-8']}`}
        data-distance="1800"
      />
      <img
        src={fog5Img}
        className={`${styles.parallax} ${styles['fog-5']}`}
        data-distance="1900"
      />
      <img
        src={mountain7Img}
        className={`${styles.parallax} ${styles['mountain-7']}`}
        data-distance="2000"
      />

            <div className={`${styles.text} ${styles.parallax}`} data-distance="0">
              <h2 className={styles.h2}>Paarth Kadakia</h2>
              <h1 className={styles.h1}>Portfolio</h1>
            </div>
          </div>
          
          
      <img src={mountain6Img} className={`${styles.parallax} ${styles['mountain-6']}`} data-distance="2300" />
      <img src={fog4Img} className={`${styles.parallax} ${styles['fog-4']}`} data-distance="2400" />
      <img src={mountain5Img} className={`${styles.parallax} ${styles['mountain-5']}`} data-distance="2550" />
      <img src={fog3Img} className={`${styles.parallax} ${styles['fog-3']}`} data-distance="2800" />
      <img src={mountain4Img} className={`${styles.parallax} ${styles['mountain-4']}`} data-distance="3200" />
      <img src={mountain3Img} className={`${styles.parallax} ${styles['mountain-3']}`} data-distance="3400" />
      <img src={fog2Img} className={`${styles.parallax} ${styles['fog-2']}`} data-distance="3600" />
      <img src={mountain2Img} className={`${styles.parallax} ${styles['mountain-2']}`} data-distance="3800" />
      <img src={mountain1Img} className={`${styles.parallax} ${styles['mountain-1']}`} data-distance="4000" />
      <img src={sunRaysImg} className={`${styles['sun-rays']} ${styles.hide}`} />
      <img src={blackShadowImg} className={`${styles['black-shadow']} ${styles.hide}`} />
      <img src={fog1Img} className={`${styles.parallax} ${styles['fog-1']}`} data-distance="4200" />
    

        </Pmain>

      </body>
    </html>
  )}
};

export default ParallaxWebsite;