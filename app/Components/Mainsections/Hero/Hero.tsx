"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import styled from "styled-components";
import scroll from "../../../../public/scroll.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { textVariant } from '../../../motion/motion';
import { SectionWrapper } from "@/app/hoc";
import gsap from 'gsap';
import myImg from '../../../../public/my-pic.jpg';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
import CanvasLoader from "../../Loader";

const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });

const Hero: React.FC = () => {

  const sliderVariant: Variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 15,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const [loader, setLoader] = useState(true);
  const [TechguyScale, TechguySetScale] = useState(1.3);
  const [computerScale, computerSetScale] = useState(1.1);
  const [TechguyPosition, TechguySetPosition] = useState([0, -2, -1.2]);
  const [computerPosition, computerSetPosition] = useState([0, -0.5, 1.2]);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width < 650) {
      TechguySetScale(1.6);
      computerSetScale(1.4);
      TechguySetPosition([0, -1.9, -1.8]);
      computerSetPosition([0, -0.1, 1.5]);
    } else if (width < 910) {
      TechguySetScale(1);
      computerSetScale(0.8);
      TechguySetPosition([0, -1.6, -0.9]);
      computerSetPosition([0, -0.5, 0.9]);
    } else {
      TechguySetScale(1.3);
      computerSetScale(1.1);
      TechguySetPosition([0, -2, -1.2]);
      computerSetPosition([0, -0.5, 1.2]);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    const timeoutId = window.setTimeout(() => setLoader(false), 9000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  useEffect(() => {
    function startLoader() {
      const counterElement = typeof document !== 'undefined' ? document.getElementById('counter') : null;
      if (!counterElement) return;
      let currentValue = 1;
      const interval = 10;
      const totalDuration = 2000;
      const numberOfIntervals = 10;

      function updateCounter() {
        if (!counterElement) return;
        const remainingTime = totalDuration - (Date.now() - startTime);
        const timePerInterval = remainingTime / numberOfIntervals;
        const increment = Math.floor(Math.random() * interval) + 1;

        if (currentValue >= 100) {
          counterElement.textContent = '100';
          return;
        }

        currentValue += increment;
        if (currentValue > Math.ceil(currentValue / 10) * 10) {
          currentValue = Math.ceil(currentValue / 10) * 10;
        }

        counterElement.textContent = currentValue.toString();

        if (Date.now() - startTime < totalDuration) {
          setTimeout(updateCounter, timePerInterval);
        } else {
          counterElement.textContent = '100';
        }
      }

      const startTime = Date.now();
      updateCounter();
    }

    startLoader();

    const timer = setTimeout(() => {
      gsap.to('.counter', { duration: 1.25, opacity: 0 });
      gsap.to('.bar', { duration: 2.5, height: 0, stagger: { amount: 0.5 }, ease: 'power4.inOut' });
      gsap.from('.text-element', { duration: 2.5, y: 700, stagger: { amount: 0.5 }, ease: 'power4.inOut', onComplete: () => setLoader(false) });
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <HeroContainer>
      {loader && (
        <div className="preloader">
          <h1 className='counter' id="counter">0</h1>
          <div className='overlay'>
            {Array.from({ length: 10 }, (_, i) => <div key={i} className='bar'></div>)}
          </div>
        </div>
      )}
      <div className="hero-container">
        <div className="hero-image-container text-element">
          <Canvas>
            <ambientLight intensity={-0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={<CanvasLoader />}>
              <TechGuy position={TechguyPosition} scale={[TechguyScale, TechguyScale, TechguyScale]} />
              <Computer position={computerPosition} scale={[computerScale, computerScale, computerScale]} />
            </Suspense>
            <Environment preset="studio" background={false} resolution={256} />
          </Canvas>
          {/* <Image src={myImg} alt="myimg" className="my-img" /> */}
        </div>
        <div className="hero-info">
          <motion.h2 className="text-element" variants={textVariant(0.5)}>VARA PRASAD</motion.h2>
          <motion.h1 className="h1 text-element" variants={textVariant(1)}>Building Premium AI-Driven Digital Products</motion.h1>
          <div className="h3-container text-element">
            <motion.h3 className="h3 " variants={textVariant(1.5)}>Full Stack Engineer, AI Data Analyst,</motion.h3>
            <motion.h3 className="h3" variants={textVariant(2)}>and Product-Focused <span className="gradient-span">Web Architect</span></motion.h3>
          </div>
          <p className="hero-proof text-element">
            Trusted by founders and teams to ship performant experiences with conversion-focused UX.
          </p>
          <div className="hero-cta text-element">
            <a href="#projects" className="primary-cta">Explore Projects</a>
            <a href="#contact" className="secondary-cta">Book a Call</a>
          </div>
          <motion.div variants={sliderVariant} animate='scrollButton' className="scroll text-element">
            <a href="#about"> <Image src={scroll} alt="scroll-img" className="scrollImg" /></a>
          </motion.div>
          {!loader && (
            <motion.h4 className="slidingText" variants={sliderVariant} initial="initial" animate="animate">
              Backend Developer | AI Data Analyst | Full Stack Web Developer
            </motion.h4>
          )}
        </div>
      </div>
    </HeroContainer>
  );
};

export default SectionWrapper(Hero, '#hero');


let HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden !important;
  padding-top: 2rem;

  .overlay{
    position: fixed;
    width: 100vw;
    height: 115vh;
    top: -1rem;
    z-index: 99 !important;
    display: flex;
}

.bar{
    width: 10vw;
    height: 120vh;
    background: #1a1a1a;
    z-index: 999 !important;
}

.counter{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 150;
    font-weight: 800;
    color: #bcbcc4;
    padding: 0.2em 0.4em;
    font-size: 15vw;
}

  .hero-container {
    display: grid;
    grid-template-columns: 40% 60%;
    min-width: 100%;
    min-height: 100%;
  }

  .hero-image-container {
    z-index: 9 !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .my-img{
      width: 25rem;
      margin-top: -5rem;
      padding-left: 2rem;
    }
  }

  .hero-image-container:active{
    cursor: grabbing;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 100vh;
    align-items: center;
    z-index: 3 !important;
    position: relative;
    padding: 2rem 2.4rem;
    margin-right: 2rem;
    background: linear-gradient(135deg, rgba(10, 18, 32, 0.62), rgba(10, 12, 20, 0.3));
    border: 1px solid rgba(124, 157, 239, 0.2);
    border-radius: 1.25rem;
    box-shadow: 0 18px 50px rgba(4, 10, 20, 0.45);
    backdrop-filter: blur(10px);

    h2 {
      letter-spacing: 0.62rem;
      color: #8ab8ff;
      font-weight: 700;
      font-size: 1.2rem;
      position: relative;
      text-shadow: 0 0 22px rgba(54, 128, 255, 0.55);
    }

    .h1 {
      font-size: 3.35rem;
      font-weight: 800;
      position: relative;
      text-align: center;
      line-height: 1.05;
      background: linear-gradient(100deg, #f8fafc 2%, #9ec5ff 48%, #59d8ff 98%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .h3-container {
      z-index: 2;
      position: relative;
      text-align: center;

      .h3 {
        font-size: 1.9rem;
        font-weight: 600;
        color: #b8c2d4;
        display: flex;
        position: relative;
      }

      .gradient-span {
        display: flex;
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline-block;
      }
    }

    .hero-cta {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 0.4rem;

      a {
        font-family: "Sora", sans-serif;
        letter-spacing: 0.02em;
        font-size: 0.92rem;
        font-weight: 700;
        border-radius: 999px;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      }

      .primary-cta {
        color: #021322;
        padding: 0.7rem 1.2rem;
        background: linear-gradient(105deg, #f6a62f 8%, #2ecdf2 94%);
        box-shadow: 0 10px 25px rgba(40, 145, 213, 0.35);
      }

      .secondary-cta {
        color: #e5efff;
        padding: 0.68rem 1.2rem;
        border: 1px solid rgba(143, 174, 255, 0.35);
        background: rgba(11, 22, 36, 0.7);
      }

      .primary-cta:hover,
      .secondary-cta:hover {
        transform: translateY(-2px);
      }
    }

    .hero-proof {
      max-width: 38rem;
      text-align: center;
      color: #afbdd3;
      font-size: 1rem;
      line-height: 1.6;
    }

    .scroll {
      padding: 1rem;
      z-index: 5 !important;
    }

    .scrollImg {
      width: 2rem;
    }

    .slidingText {
      position: absolute;
      bottom: 0.5rem;
      font-size: 35vh;
      white-space: nowrap;
      color: rgba(40, 55, 88, 0.35);
      width: 50vw;
      font-weight: 500;
      z-index: -3;
    }
  }

  @media only screen and (max-width: 910px) {
    .hero-info {
      gap: 1rem;
      min-height: 100vh;
      margin-right: 1rem;
      padding: 1.8rem;

      h2 {
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.5rem;
      }

      .h1 {
        font-size: 2.2rem;
        font-weight: 700;
      }

      .h3-container {
        .h3 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }

      .hero-cta {
        a {
          font-size: 0.84rem;
        }
      }

      .hero-proof {
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    padding-top: 2rem;

    .counter{
      bottom: 2rem;
    }

    .hero-container {
      display: flex;
      flex-direction: column-reverse;
    }

    .hero-image-container {
      min-height: 50vh;

      .my-img{
      width: 18rem;
      margin-top: -1rem;
      margin-left: -2rem;
    }

      canvas{
        min-height: 50vh !important;
      }
      
    }

    .hero-info {
      gap: 0.4rem;
      min-height: 35vh;
      margin-right: 0;
      margin-left: 0;
      border-radius: 1rem;
      padding: 1.2rem 0.75rem;
      background: linear-gradient(130deg, rgba(8, 16, 30, 0.6), rgba(10, 13, 20, 0.24));

      h2 {
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.4rem;
      }

      .h1 {
        font-size: 2rem;
        font-weight: 600;
      }

      .h3-container {
        .h3 {
          font-size: 1rem;
          font-weight: 600;
        }
      }

      .hero-cta {
        flex-direction: column;
        width: 100%;
        max-width: 18rem;

        a {
          width: 100%;
          text-align: center;
        }
      }

      .hero-proof {
        font-size: 0.82rem;
        padding: 0 0.4rem;
      }

      .scrollImg {
        width: 1.6rem;
      }

      .slidingText {
        width: 150vw;
        bottom: -23rem;
      }
    }
  }

  @media only screen and (max-width: 330px) {
    padding-top: 1rem;

    .hero-info {
      gap: 0.4rem;
      min-height: 35vh;

      h2 {
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.4rem;
      }

      .h1 {
        font-size: 1.5rem;
        font-weight: 600;
      }

      .h3-container {
        .h3 {
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
    }
  }
`;
