import React , {useEffect, useRef, Component} from 'react';
import styles from './style.module.css'; // Import your CSS file here
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components'
import logo from '../../../src/assets/logo-color.svg'

import logoImg from './img/logo.png';
import backgroundImg from './img/background.png';
import fog7Img from './img/fog_7.png';
import mountain10Img from './img/mountain_10.png';
import mountain9Img from './img/mountain_9.png'
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


const Pmain = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`



const ParallaxWebsite = () => {
  gsap.registerPlugin(ScrollTrigger);
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
  let h1Ref = useRef();
  let h2Ref = useRef();
  let sunrayRef = useRef();
  let blackRef = useRef();




  // let f = 0
  
  useEffect(() => {
  let ctx =  gsap.context(() => {
      gsap.from(backgroundRef, {top: 600, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog7Ref, {top: 1000, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain10Ref, {top: 1100, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog6Ref, {top: 1400, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain9Ref, {top: 1700, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain8Ref, {top: 1800, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog5Ref, {top: 1900, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain7Ref, {top: 2000, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain6Ref, {top: 2300, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog4Ref, {top: 2400, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain5Ref, {top: 2550, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog3Ref, {top: 2800, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain4Ref, {top: 3200, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain3Ref, {top: 3400, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog2Ref, {top: 3600, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain2Ref, {top: 3800, duration: 3.5, ease: 'power3.out'})
      gsap.from(mountain1Ref, {top: 4000, duration: 3.5, ease: 'power3.out'})
      gsap.from(fog1Ref, {top: 4200, duration: 3.5, ease: 'power3.out'})
      gsap.from(navbarRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})
      gsap.from(h1Ref, {y: 100, opacity:0, duration: 1.5, ease: 'power3.out', delay: 2})
      gsap.from(h2Ref, {y: -100, opacity:0, duration: 1.5, ease: 'power3.out', delay: 2})
      gsap.from(sunrayRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})
      gsap.from(blackRef, {opacity:0, duration: 3.5, ease: 'power3.out', delay: 2})

    }, styles.parallax);
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
      <div className={styles.shadow}></div>
          <img src={backgroundImg} className={`${styles.parallax} ${styles['bg-img']}`} ref={el => backgroundRef = el}/>
          <img src={fog7Img} className={`${styles.parallax} ${styles['fog-7']}` } ref={el => fog7Ref = el} />
          <img src={mountain10Img} className={`${styles.parallax} ${styles['mountain-10']}`}  ref={el => mountain10Ref = el}/>
          <img src={fog6Img} className={`${styles.parallax} ${styles['fog-6']}`} ref={el => fog6Ref = el} />
          {/* ...other image elements */}
          {/* <img src={require('./img/background.png')} className="parallax bg-img" data-distance="-75" />
          <img src={require('./img/fog_7.png')} className="parallax fog-7" data-distance="850" />
          <img src={require('./img/mountain_10.png')} className="parallax mountain-10" data-distance="1100" />
          <img src={require('./img/fog_6.png')} className="parallax fog-6" data-distance="1400" /> */}
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
          {/* <img src={require('./img/mountain_6.png')} className="parallax mountain-6" data-distance="2300" />
          <img src={require('./img/fog_4.png')} className="parallax fog-4" data-distance="2400" />
          <img src={require('./img/mountain_5.png')} className="parallax mountain-5" data-distance="2550" />
          <img src={require('./img/fog_3.png')} className="parallax fog-3" data-distance="2800" />
          <img src={require('./img/mountain_4.png')} className="parallax mountain-4" data-distance="3200" />
          <img src={require('./img/mountain_3.png')} className="parallax mountain-3" data-distance="3400" />
          <img src={require('./img/fog_2.png')} className="parallax fog-2" data-distance="3600" />
          <img src={require('./img/mountain_2.png')} className="parallax mountain-2" data-distance="3800" />
          <img src={require('./img/mountain_1.png')} className="parallax mountain-1" data-distance="4000" />
          <img src={require('./img/sun_rays.png')} className="sun-rays hide" />
          <img src={require('./img/black_shadow.png')} className="black-shadow hide" />
          <img src={require('./img/fog_1.png')} className="parallax fog-1" data-distance="4200" /> */}
          
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
    

        </Pmain>

      </body>
    
      <body className={`${styles.body} ${styles.text}`}>


      </body>

    </html>
    
  )};

export default ParallaxWebsite;