"use client"; // Add this directive to mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from './Components/Mainsections/Navbar/Navbar';
import { navItems } from '../public/data';
import { GlobalStyles } from './GlobalStyles';
import Footer from './Components/Mainsections/Footer/Footer';

const Hero = dynamic(() => import('./Components/Mainsections/Hero/Hero'), { ssr: false });
const Experience = dynamic(() => import('./Components/Mainsections/Experience/Experience'), { ssr: false });
const Projects = dynamic(() => import('./Components/Mainsections/Projects/Projects'), { ssr: false });
const Skills = dynamic(() => import('./Components/Mainsections/Skills/Skills'), { ssr: false });
const Tech = dynamic(() => import('./Components/Mainsections/Tech/Tech'), { ssr: false });
const Contact = dynamic(() => import('./Components/Mainsections/Contact/Contact'), { ssr: false });


export default function Home() {
  const [showStarsCanvas, setShowStarsCanvas] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowStarsCanvas(true);
  //   }, 5000); // 5000 milliseconds = 8 seconds

  //   return () => clearTimeout(timer); // Clean up the timer on component unmount
  // }, []);

  return (
    <main>
      <GlobalStyles />
      <Navbar navItems={navItems} className="nav" />
      <div className="relative z-0">
        <Hero idName="#hero" />
        <Experience idName="#about" />
        <Projects idName="#projects" />
        <Skills idName="skills" />
        <Tech idName="tech" />
        <Contact idName="#contact" />
        <Footer idName=''/>
{/*         {showStarsCanvas && <StarsCanvas />} */}
      </div>
    </main>
  );
}
