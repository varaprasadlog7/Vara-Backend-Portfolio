"use client";
import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/hoc";
import { skillCategories } from "../../../../public/data";
import Image from "next/image";
import { fadeIn, textVariant } from "../../../motion/motion";

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <motion.div variants={textVariant(0.1)} className='skills-title'>
                <h1>My <span className='span-gradient'>Skills</span></h1>
                <p>Categorized by expertise for a comprehensive look at my technical toolkit.</p>
            </motion.div>

            <div className='skills-grid'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="skill-card"
                    >
                        <h2>{category.title}</h2>
                        <div className="skill-items">
                            {category.skills.map((skill, sIndex) => (
                                <div key={sIndex} className="skill-item">
                                    <div className="icon-wrapper">
                                        <Image 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                            width={32} 
                                            height={32} 
                                            className="skill-icon"
                                        />
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SkillsContainer>
    );
};

export default SectionWrapper(memo(Skills), "skills");

const SkillsContainer = styled.div`
    min-height: 100vh;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .skills-title {
        text-align: center;
        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            letter-spacing: 0.02em;
            .span-gradient {
                background: linear-gradient(98deg, #f7ae42 12%, #66a3ff 55%, #27d2eb 95%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }
        p {
            color: #a9b2c4;
            font-size: 1.1rem;
            max-width: 44rem;
        }
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        width: 100%;
        max-width: 1100px;
    }

    .skill-card {
        background: linear-gradient(155deg, rgba(14, 22, 36, 0.88), rgba(10, 15, 26, 0.72));
        backdrop-filter: blur(12px);
        border: 1px solid rgba(115, 147, 228, 0.24);
        border-radius: 20px;
        padding: 2rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 14px 35px rgba(3, 8, 20, 0.42);

        &:hover {
            transform: translateY(-7px);
            box-shadow: 0 18px 38px rgba(1, 8, 24, 0.58);
            border-color: rgba(39, 210, 235, 0.55);
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #e7efff;
            text-align: center;
            border-bottom: 1px solid rgba(111, 140, 223, 0.28);
            padding-bottom: 0.75rem;
        }

        .skill-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
        }

        .skill-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            
            .icon-wrapper {
                background: rgba(109, 138, 221, 0.18);
                padding: 0.5rem;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                transition: background 0.3s ease;
            }

            span {
                font-size: 0.95rem;
                color: #c4cee2;
                font-weight: 600;
            }

            &:hover {
                .icon-wrapper {
                    background: rgba(39, 210, 235, 0.3);
                }
                span {
                    color: white;
                }
            }
        }
    }

    @media only screen and (max-width: 900px) {
        padding: 2rem;
        .skills-grid {
            grid-template-columns: 1fr;
        }
        .skills-title h1 {
            font-size: 2.5rem;
        }
    }

    @media only screen and (max-width: 600px) {
        .skill-items {
            grid-template-columns: 1fr !important;
        }
    }
`;
