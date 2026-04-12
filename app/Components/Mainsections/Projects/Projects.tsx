"use client"
import React from 'react';
import { projects } from '../../../../public/data';
import { CardContainer, CardBody, CardItem } from '../../ui/3d-card'; // Adjust the import path as needed
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { SectionWrapper } from '../../../hoc/index'
import { slideIn, textVariant } from '../../../motion/motion'

const Projects = () => {


  return (
    <ProjectsMainContainer className="main-container" >
      <div className='featured-container'>
        <h1>
          Featured <span className='span-gradient'>Works</span>
        </h1>
        <p>Selected builds focused on speed, product thinking, and measurable business impact.</p>
      </div>
      <ProjectContainer className="projects-container">
        {projects.map((project) => (
          <CardContainer key={project.id} className="card-container" num={project.id}>
            <CardBody className="card-body">
              <CardItem className="card-item" translateZ={50}>
                <h2>{project.title}</h2>
                <p>{project.des}</p>
                <div className='project-meta'>
                  <span>{project.category}</span>
                  <span>{project.duration}</span>
                </div>
                <p className='impact-line'>{project.impact}</p>
              </CardItem>
              <CardItem className="card-item" translateZ={90}>
                <Image src={project.img} className='project-img' alt={project.title} width={450} height={450} />
              </CardItem>
              <CardItem className="card-item icons-btn-div" translateZ={40}>
                <div className="icon-list">
                  {project.iconLists.map((icon, index) => (
                    <Image key={index} src={icon} alt={'icon-img'} width={20} height={20} />
                  ))}
                </div>
                <a href={project.link} className='btn' target="_blank" rel="noopener noreferrer">
                  <div className="live-button">
                    <button className="px-7 py-1.5 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                      <span className="relative z-20">Open Live Project</span>
                    </button>
                  </div>
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </ProjectContainer>
    </ProjectsMainContainer>
  );
};

export default SectionWrapper(Projects, 'projects');


let ProjectsMainContainer = styled.div`
      margin-top: -2rem;
      overflow: hidden !important;
     .featured-container{
      min-width: 100%;
      text-align: center;
      margin-top: 5rem;
      h1{
        font-size: 3.2rem;
        font-weight: 800;
        letter-spacing: 0.02em;
      }

      p {
        margin-top: 0.5rem;
        color: #a8b4c7;
        font-size: 1.02rem;
      }
    }

    @media only screen and (max-width:780px){
      .featured-container{
        h1{
        font-size: 2rem;
      }

      p {
        font-size: 0.9rem;
        padding: 0 1rem;
      }
      }
    }

    @media only screen and (max-width:480px){
      .featured-container{
        h1{
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
      }
      }
    }
`

let ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    padding: 2rem 1.5rem;

    .card-container{
      border: 1px solid rgba(121, 153, 236, 0.22);
      border-radius: 1.15rem;
      box-shadow: 0 14px 32px rgba(2, 8, 20, 0.45);
      padding: 0.8rem;
      background: linear-gradient(140deg, rgba(8, 16, 30, 0.88) 9%, rgba(18, 30, 48, 0.74) 56%, rgba(10, 14, 24, 0.86) 100%);
      min-width: 32vw;
      transition: transform 0.24s ease, border-color 0.24s ease;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(80, 207, 243, 0.45);
      }

      .card-body{
        display: flex ;
        flex-direction: column ;
        justify-content: space-between;
        cursor: pointer;
        gap: 0.8rem;
      }

      .card-item{
        h2{
          font-size: 1.35rem;
          font-weight: 700;
          padding-bottom: 0.5rem;
          color: #e8efff;
        }
        p{
          font-size: 0.88rem;
          font-weight: 500;
          color: #a9b3c8;
          line-height: 1.55;
        }

        .project-meta {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
          margin-top: 0.7rem;

          span {
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #deecff;
            border: 1px solid rgba(126, 160, 238, 0.34);
            background: rgba(22, 38, 65, 0.72);
            border-radius: 999px;
            padding: 0.26rem 0.55rem;
          }
        }

        .impact-line {
          margin-top: 0.55rem;
          color: #79d3ee;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-img{
          border-radius: 1rem;
          margin-top: -0.6rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      }
      
      .icons-btn-div{
        display: flex;
        justify-content: space-between;
        min-width: 100%;
        align-items: center;
        .icon-list{
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
      }

      .btn{
        font-size: 0.8rem;

        button {
          background: linear-gradient(110deg, rgba(35, 62, 110, 0.82), rgba(24, 41, 71, 0.9));
          border-color: rgba(102, 142, 239, 0.55);
        }
      }
      }
  }

  @media only screen and (max-width:790px){
    display: flex !important;
    flex-direction: column !important;

    .card-container {
      min-width: 100%;
    }
  }

  @media only screen and (max-width:490px){
    .card-container{
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

`