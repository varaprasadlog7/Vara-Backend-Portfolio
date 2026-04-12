"use client"

import React, { memo, useState } from "react";
import { SectionWrapper } from '@/app/hoc';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import styled from "styled-components";
import MagicButton from "../../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";



const Footer: React.FC = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "varaprasadlog@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };


    return (
        <FooterContainer>
            <div className="mail-copy-container">
                <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                />
            </div>
            <div className="icons-container">
                <a href="https://www.linkedin.com/in/vara-prasad-purre-a54522288" target="_blank" rel="noreferrer"><IconBrandLinkedin className="h-8 w-8 text-slate-200 hover:text-blue-400 transition-colors" /></a>
                <a href="https://github.com/varaprasadlog7" target="_blank" rel="noreferrer"><IconBrandGithub className="h-8 w-8 text-slate-200 hover:text-cyan-300 transition-colors" /></a>
                <a href="https://www.instagram.com/artist_vara/" target="_blank" rel="noreferrer"><IconBrandInstagram className="h-8 w-8 text-slate-200 hover:text-pink-400 transition-colors" /></a>
                <a href="https://wa.me/918247505058" target="_blank" rel="noreferrer"><IconBrandWhatsapp className="h-8 w-8 text-slate-200 hover:text-emerald-400 transition-colors" /></a>
            </div>
        </FooterContainer>
    )
}

export default SectionWrapper(memo(Footer), '');

let FooterContainer = styled.div`
    padding: 1.5rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -2rem;
    .mail-copy-container{
        margin-top: -2.5rem;
        .check{
            border: 1px solid red !important;
        }
    }
    .icons-container{
        display: flex;
        gap: 1rem;
        z-index: 99;

        a {
            width: 2.45rem;
            height: 2.45rem;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(125, 156, 236, 0.28);
            background: linear-gradient(145deg, rgba(15, 23, 39, 0.86), rgba(9, 16, 28, 0.76));
            box-shadow: 0 8px 20px rgba(2, 8, 20, 0.45);
            transition: transform 0.2s ease, border-color 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(46, 205, 242, 0.52);
            }
        }
    }

    @media only screen and (max-width:800px){
        margin-top: -5rem !important;
        padding: 1rem 1.5rem;
        .mail-copy-container{
        margin-top: -1rem;
        padding-right: 1rem;
    }
}

    @media only screen and (max-width:650px){
        margin-top: 0.8rem !important;
        gap: 1rem;
        padding: 1rem;
        flex-direction: column;
        .mail-copy-container{
        margin-top: 0.2rem;
        padding-right: 0;
    }

    .icons-container {
        width: 100%;
        justify-content: center;
        gap: 1.2rem;
    }
    }

`