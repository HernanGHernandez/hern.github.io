import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../styles/Footer.css";
import hernDrawing from "../assets/img/minimalist-hern.png"
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = () => {
    return (
        <section class="Footer" id="Footer">
            <Container>
                <div className='footerSection'>
                    <p>©2022 Copyright: Hernan Hernandez</p>
                </div>
            </Container>
            {/* <div class="container row" id="social-container">
                <a href="https://www.linkedin.com/in/christine-nguyenl/" target="_blank">LinkedIn</a>
                <span>•</span>
                <a href="https://github.com/chrlng" target="_blank">Github</a>
                <span>•</span>
                <a href="https://www.instagram.com/heyythereitschristine/?hl=en" target="_blank">Instagram</a>
                <span>•</span>
                <a href="mailto:christine_nguyenl@berkeley.edu" target="_blank">Email</a>
            </div>
            <div>
                <p id="copyright">Coded by Christine with ♡ 2020</p>
            </div> */}
        </section>
    )
}

export default Footer