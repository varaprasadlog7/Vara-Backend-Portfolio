import React, { Suspense, useEffect, useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { SectionWrapper } from '@/app/hoc';
import { motion, Variants } from 'framer-motion'
import { fadeIn, slideIn } from "../../../motion/motion";
import { ContactForm } from './ContactForm';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
import myImg from '../../../../public/my-pic.jpg';
import Image from "next/image";

// const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
// const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });


const Contact: React.FC = () => {

  // const [TechguyScale, TechguySetScale] = useState(1.3);
  // const [computerScale, computerSetScale] = useState(1.1);
  // const [TechguyPosition, TechguySetPosition] = useState([0, -2, -1.2]);
  // const [computerPosition, computerSetPosition] = useState([0, -0.5, 1.2]);

  // // Handle resize and set states accordingly
  // const handleResize = useCallback(() => {
  //   const width = window.innerWidth;

  //   if (width < 650) {
  //     TechguySetScale(1.6);
  //     computerSetScale(1.4);
  //     TechguySetPosition([0, -3.2, -1.8]);
  //     computerSetPosition([0, -1.2, 1.5]);
  //   } else if (width < 910) {
  //     TechguySetScale(1);
  //     computerSetScale(0.8);
  //     TechguySetPosition([0, -1.6, -0.9]);
  //     computerSetPosition([0, -0.5, 0.9]);
  //   } else {
  //     TechguySetScale(1.3);
  //     computerSetScale(1.1);
  //     TechguySetPosition([0, -2, -1.2]);
  //     computerSetPosition([0, -0.5, 1.2]);
  //   }
  // }, []);

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [handleResize]);

  return (
    <ContactContainer>
      <motion.div variants={fadeIn('left', 'tween', 1, 1)} className='globe-container'>
        {/* <Canvas>
          <ambientLight intensity={0} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            
          </Suspense>
          <Environment preset="studio" background={false} resolution={256} />
        </Canvas> */}
         <Image src={myImg} alt="myimg" className="my-img" />
      </motion.div>
      <motion.div variants={fadeIn('right', 'tween', 1, 1)} className='form-container xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <ContactForm />
      </motion.div>
    </ContactContainer>
  )
}

export default SectionWrapper(memo(Contact), 'contact');

let ContactContainer = styled.div`
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden !important;

    .form-container,.globe-container{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .form-container {
      margin: 1.2rem;
      border-radius: 1.2rem;
      border: 1px solid rgba(126, 160, 241, 0.25);
      background: linear-gradient(150deg, rgba(11, 20, 35, 0.8), rgba(13, 21, 32, 0.58));
      box-shadow: 0 16px 34px rgba(3, 8, 20, 0.42);
    }

    .globe-continer:active{
      cursor: grabbing;
    }

    .globe-container{
      .my-img{
      max-width: 25rem;
      padding-left: 2rem;
      filter: drop-shadow(0 16px 30px rgba(2, 8, 20, 0.5));
    }
    }

    @media only screen and (max-width:650px){
      padding-top: 5rem;
      display: flex;
      flex-direction: column-reverse;

      .form-container {
        margin: 0.4rem;
        width: calc(100% - 1rem);
      }

      .globe-container{
        .my-img{
          padding-top: 1rem;
      width: 15rem;
      margin-left: -2rem;
      }
    }
  }
`