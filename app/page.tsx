"use client"; // Add this directive to mark the component as a Client Component

import React from 'react';
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
  return (
    <main className="main-shell">
      <GlobalStyles />
      <div className="bg-orb orb-cyan" />
      <div className="bg-orb orb-amber" />
      <div className="bg-orb orb-slate" />
      <Navbar navItems={navItems} className="nav" />
      <div className="relative z-10 content-shell">
        <section className="section-block"><Hero idName="#hero" /></section>
        <div className="section-divider" />
        <section className="section-block"><Experience idName="#about" /></section>
        <div className="section-divider" />
        <section className="section-block"><Projects idName="#projects" /></section>
        <div className="section-divider" />
        <section className="section-block"><Skills idName="skills" /></section>
        <div className="section-divider" />
        <section className="section-block"><Tech idName="tech" /></section>
        <div className="section-divider" />
        <section className="section-block"><Contact idName="#contact" /></section>
        <section className="section-block"><Footer idName=''/></section>
      </div>
    </main>
  );
}
