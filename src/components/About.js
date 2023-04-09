import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Badge, Button } from "react-bootstrap";
import "../styles/About.css";
import hernResume from "../assets/img/Hernan_Hernandez_Resume.pdf"
import hern from "../assets/img/hern.png"
import { TbBrandGithub, } from "react-icons/tb";
import { FiLinkedin, FiInstagram } from "react-icons/fi";


export const About = () => {

    return (
        <section className="about" id="About">
            <Container>
                {/* <div className='outerBackground'> */}
                {/* <div className='innerBackground'> */}
                <Row className="justify-content-md-center">
                    <Col xs={9} md={6} lg={6}>
                        <div className='title'>
                            <h1><span className="tagline">About Me </span></h1>
                        </div>
                        {/* <Row className="justify-content-md-center">
                                    <Col xs={12} md={12} xl={12}> */}

                        <ListGroup className="myList" variant="flush">
                            <ListGroup.Item> <b> Name: </b> Hernan Hernandez</ListGroup.Item>
                            <ListGroup.Item> <b> HomeTown: </b> Greenfield, California</ListGroup.Item>
                            <ListGroup.Item> <b> School: </b> California State University Monterey Bay</ListGroup.Item>
                            <ListGroup.Item><b> Hobbies: </b> Cooking, Weight Lifting, Art Design, learning new things </ListGroup.Item>
                            <ListGroup.Item> <b> Resume: </b> <a href={hernResume} className="resumeBtn">Hernandez_Hernan_Resume</a></ListGroup.Item>
                            <ListGroup.Item><b> Contact Me:</b> <a className="email" href="mailto:hernanghrndz@gmail.com">hernanghrndz@gmail.com</a></ListGroup.Item>
                        </ListGroup>
                        {/* </Col>
                                </Row> */}
                    </Col>
                    <Col xs={3} md={6} lg={6} className="img-col">
                        {/* <div className='outerImg'>
                            <div className="innerImg"> */}
                        <div className="image-container">
                            <div className="image-background">
                                <img className="hernImg" src={hern} alt="about_Img" />
                            </div>
                        </div>
                        {/* </div>
                        </div> */}
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/HernanHrndz"> <FiLinkedin size={35} /></a>
                            <a href="https://www.instagram.com/hernanh_"> <FiInstagram size={35} /></a>
                            <a href="https://www.github.com/hern-hrndz"> <TbBrandGithub size={35} /></a>
                        </div>
                    </Col>
                </Row>
                {/* </div> */}
                {/* </div> */}
            </Container>
        </section >
    )
}

export default About