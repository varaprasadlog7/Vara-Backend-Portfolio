"use client"

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '../../ui/TextRevealCard';
import { SectionWrapper } from '@/app/hoc';

const Experience = () => {

    return (
        <ExperienceContainer>
            <div className='exp-title'>
                <h1>My <span className='span-gradient'>Work Experience</span></h1>
            </div>
            <div className='exp-card-container'>
                <div className='exp-card' >
                    <TextRevealCard
                        text="Associate Backend Developer"
                        revealText="at The Alter Office"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Associate Backend Developer
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                At Alter Office, engineered high-performance server-side architectures and RESTful APIs using Java and Spring Boot, optimizing data processing efficiency. Architected robust database schemas using MongoDB for scalable storage and implemented advanced authentication layers for secure system access. Spearheaded backend performance tuning and maintained seamless API documentation while utilizing Git for collaborative version control.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
            </div>
            <div className='exp-card-container' style={{marginTop:'-2rem'}}>
                <div className='exp-card' >
                    <TextRevealCard
                        text="Backend Developer"
                        revealText="at DeepThought"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Backend Developer Intern
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                At DeepThought, engineered robust RESTful APIs and server-side logic using Node.js and Express, optimizing for scalability and high-performance data throughput. Designed and managed complex PostgreSQL database schemas while implementing secure JWT-based authentication and authorization flows. Utilized Git for version control and focused on backend performance optimization to handle concurrent user traffic.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
            </div>
        </ExperienceContainer>
    )
}

export default SectionWrapper(Experience, 'about');

const ExperienceContainer = styled.div`
    min-height: 100vh;


    .exp-title {
        padding: 0.5rem;
        text-align: center;
        
        h1 {
            font-size: 3rem;
            font-weight: 800;
            
            .span-gradient {
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }
    }

    .exp-card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 85vh;
        min-width: 98vw;

        .exp-card {
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 99vw;

            .exp-info-container {
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                min-width: 90vw;
                cursor: grab;
            }

            .info-text {
                font-size: 1.7rem;
                font-weight: 700;
                padding-bottom: 0.5rem;
            }

            .info-para {
                font-size: 1rem;
            }
        }
    }

    @media only screen and (max-width: 770px) {
        min-height: 80vh !important;

        .exp-card-container {
            min-height: 80vh !important;
        }

        .exp-title h1 {
            font-size: 2rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.8rem !important;
        }
    }

    @media only screen and (max-width: 610px) {
        .exp-info-container {
            flex-direction: column;
            align-items: center;
        }

        .info-text {
            padding-bottom: 0rem !important;
        }

        .reveal-text{
        font-size: 1.75rem !important;
    }
    .upper-text{
        font-size: 1.7rem !important;
    }
    }

    @media only screen and (max-width: 480px) {
        .exp-title h1 {
            font-size: 1.5rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.6rem !important;
        }
    }

    @media only screen and (max-width: 355px) {
        .reveal-container {
            min-height: 15vh !important;
            min-width: 50vw !important;
            max-width: 50vw !important;
        }
    }
`;
