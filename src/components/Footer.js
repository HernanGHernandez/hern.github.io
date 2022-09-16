import React from 'react';
import { Container } from "react-bootstrap";
import { TbBrandGithub, } from "react-icons/tb";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import "../styles/Footer.css";

export const Footer = () => {
    return (
        <section className="Footer" id="Footer">
            <Container>
                <div className='Contact'>
                    <a href="mailto:hernanghrndz@gmail.com"><AiOutlineMail size={35} /></a>
                    <span className='dot'>•</span>
                    <a href="https://www.linkedin.com/in/HernanHrndz"> <FiLinkedin size={35} /></a>
                    <span className='dot'>•</span>
                    <a href="https://www.instagram.com/hernanh_"> <FiInstagram size={35} /></a>
                    <span className='dot'>•</span>
                    <a href="https://www.github.com/HernanGHernandez"> <TbBrandGithub size={35} /></a>
                </div>
                <div className='footerSection'>
                    <p>©2022 Copyright: Hernan Hernandez</p>
                </div>
            </Container>
        </section>
    )
}

export default Footer