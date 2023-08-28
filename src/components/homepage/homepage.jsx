import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import logo from '../../../src/assets/logo-color.svg';
import styles from './style.module.css'; // Import your CSS file here

import bg from './img/bg2.mp4';

const Pmain = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`



const ParallaxWebsite = () => {
  let backgroundRef = useRef();
  let fog7Ref = useRef();
  let mountain10Ref = useRef();
  let fog6Ref = useRef();

  let mountain9Ref = useRef();
  let mountain8Ref = useRef();
  let fog5Ref = useRef();
  let mountain7Ref = useRef();
  let mountain6Ref = useRef();
  let fog4Ref = useRef();
  let mountain5Ref = useRef();
  let fog3Ref = useRef();
  let mountain4Ref = useRef();
  let mountain3Ref = useRef();
  let fog2Ref = useRef();
  let mountain2Ref = useRef();
  let mountain1Ref = useRef();
  let fog1Ref = useRef();
  let navbarRef = useRef();
  let shadowRef = useRef();
  let h1Ref = useRef();
  let h2Ref = useRef();
  let sunrayRef = useRef();
  let blackRef = useRef();




  // let f = 0
  
  useLayoutEffect(() => {
  let ctx =  gsap.context(() => {
      // gsap.from(backgroundRef, {top: 400, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog7Ref, {top: 1000, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain10Ref, {top: 1100, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog6Ref, {top: 1400, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain9Ref, {top: 1700, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain8Ref, {top: 1800, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog5Ref, {top: 1900, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain7Ref, {top: 2000, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain6Ref, {top: 2300, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog4Ref, {top: 2400, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain5Ref, {top: 2550, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog3Ref, {top: 2800, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain4Ref, {top: 3200, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain3Ref, {top: 3400, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog2Ref, {top: 3600, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain2Ref, {top: 3800, duration: 3.5, ease: 'power3.out'})
      // gsap.from(mountain1Ref, {top: 4000, duration: 3.5, ease: 'power3.out'})
      // gsap.from(fog1Ref, {top: 4200, duration: 3.5, ease: 'power3.out'})
      gsap.from(navbarRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})
      gsap.from(shadowRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})

      // gsap.from(h1Ref, {y: 100, opacity:0, duration: 1.5, ease: 'power3.out', delay: 2})
      // gsap.from(h2Ref, {y: -100, opacity:0, duration: 1.5, ease: 'power3.out', delay: 2})
      // gsap.from(sunrayRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})
      // gsap.from(blackRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})

    }, styles.parallax);
    console.log(backgroundRef.offsetHeight)

    gsap.to('about', {
      ScrollTrigger:{
        snap: 'about'}
  

    })

    
    
  return () => ctx.revert()

  }, [])

  // GSAP ANIMATION BUGGED EFFECTS

    // const parallax_el = document.querySelectorAll(`.${styles.parallax}`);
    // let ctx = gsap.context(() =>{
    //   let timeline = gsap.timeline();
    //   Array.from(parallax_el)
    //   .filter(el=> !el.classList.contains(`${styles.text}`))
    //   .forEach((el) => {
    //   f = el.offsetHeight;
    //   console.log(f);
      
    //   timeline.fromTo(
    //     el,
    //     {y: el.dataset.distance}, {y:f - 300});}
    //     )
  
    // })
    // return () => ctx.revert();



  return (
    <html lang="en">
      <head>
        {/* ...head content */}
        <link rel="stylesheet" href={styles.style} />
      </head>
      <body className={styles.body}>
        <header className={`${styles.hide} ${styles.header}`}  ref={el => navbarRef = el}>
          <nav className={styles.nav}>
            <img src={logo} alt="Travelo" className={styles.logo} />
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="#project">Projects</a>
              </li>
              <li>
                <a className={styles.a} href="#about">About</a>
              </li>
              <li>
                <a className={styles.a} href="#contact">Contact</a>
              </li>
              
            </ul>
          </nav>
        </header>

  <Pmain >
  <video className={styles.video} src={bg} autoPlay muted ></video>

      <div className={styles.shadow} ref={el => shadowRef = el}></div>
          {/* <img src={backgroundImg} className={`${styles.parallax} ${styles['bg-img']}`} ref={el => backgroundRef = el}/>
          <img src={fog7Img} className={`${styles.parallax} ${styles['fog-7']}` } ref={el => fog7Ref = el} />
          <img src={mountain10Img} className={`${styles.parallax} ${styles['mountain-10']}`}  ref={el => mountain10Ref = el}/>
          <img src={fog6Img} className={`${styles.parallax} ${styles['fog-6']}`} ref={el => fog6Ref = el} />
         
          <div>
            <img
              src={mountain9Img}
              className={`${styles.parallax} ${styles['mountain-9']}`}
               ref={el => mountain9Ref = el}
            />
      <img
        src={mountain8Img}
        className={`${styles.parallax} ${styles['mountain-8']}`}
         ref={el => mountain8Ref = el}
      />
      <img
        src={fog5Img}
        className={`${styles.parallax} ${styles['fog-5']}`}
        ref={el => fog5Ref = el}
      />
      <img
        src={mountain7Img}
        className={`${styles.parallax} ${styles['mountain-7']}`}
        ref={el => mountain7Ref = el}

      />

            <div className={`${styles.text} ${styles.parallax}`}>
              <h2 className={styles.h2}  ref={el => h2Ref = el}>Paarth Kadakia</h2>
              <h1 className={styles.h1} ref={el => h1Ref = el}>Portfolio</h1>
            </div>
          </div>
        
      <img src={mountain6Img} className={`${styles.parallax} ${styles['mountain-6']}`}  ref={el => mountain6Ref = el}/>
      <img src={fog4Img} className={`${styles.parallax} ${styles['fog-4']}`} ref={el => fog4Ref = el} />
      <img src={mountain5Img} className={`${styles.parallax} ${styles['mountain-5']}`} ref={el => mountain5Ref = el} />
      <img src={fog3Img} className={`${styles.parallax} ${styles['fog-3']}`} ref={el => fog3Ref = el} />
      <img src={mountain4Img} className={`${styles.parallax} ${styles['mountain-4']}`}  ref={el => mountain4Ref = el}/>
      <img src={mountain3Img} className={`${styles.parallax} ${styles['mountain-3']}`}  ref={el => mountain3Ref = el}/>
      <img src={fog2Img} className={`${styles.parallax} ${styles['fog-2']}`} ref={el => fog2Ref = el}/>
      <img src={mountain2Img} className={`${styles.parallax} ${styles['mountain-2']}`} ref={el => mountain2Ref = el} />
      <img src={mountain1Img} className={`${styles.parallax} ${styles['mountain-1']}`} ref={el => mountain1Ref = el}/>
      <img src={sunRaysImg} className={`${styles['sun-rays']} ${styles.hide}`}  ref={el => sunrayRef = el}/>
      <img src={blackShadowImg} className={`${styles['black-shadow']} ${styles.hide}`}  ref={el => blackRef = el}/>
      <img src={fog1Img} className={`${styles.parallax} ${styles['fog-1']}`} ref={el => fog1Ref = el} />
     */}

        </Pmain>

      </body>
    
      <body className={`${styles.body} ${styles.text}`}>


      </body>

    </html>
    
  )};

export default ParallaxWebsite;