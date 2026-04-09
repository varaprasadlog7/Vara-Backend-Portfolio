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
            .span-gradient {
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }
        p {
            color: #949494;
            font-size: 1.1rem;
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
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            border-color: rgba(31, 83, 198, 0.5);
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #e2e2e2;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
                background: rgba(255, 255, 255, 0.05);
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
                color: #bcbcbc;
                font-weight: 500;
            }

            &:hover {
                .icon-wrapper {
                    background: rgba(255, 255, 255, 0.1);
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
