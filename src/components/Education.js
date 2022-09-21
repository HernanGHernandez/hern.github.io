import "../styles/Education.css";
// import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from "react-bootstrap";

import csumbLogo from "../assets/img/csumbLogo.png"


export const Education = () => {


    return (
        <section className="Education" id="education">
            <Container>
                <div className="title">
                    <h1><span className="eduTitle">Education </span></h1>
                </div>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">

                        <div>
                            <img width={100} src={csumbLogo} alt="csumbImg" />
                        </div>

                    </Col>
                    <Col xs lg="6">
                        <div className="containerSchool" id="school">
                            <h2>California State University, Monterey Bay</h2>
                            <h3>B.S. - Computer Science, Software Engineering</h3>
                            <p className="eduList">Graduation: May 2022</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    {/* <Col md={{ span: 2, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col> */}
                    <Col md={{ span: 12, offset: 4 }}>
                        <div className="courses">
                            <h4>Relevant Coursework:</h4>
                            <p className="subTitle" >Computer Science</p>
                            <ul className="eduList">
                                <li>Software Engineering(CST 438)</li>
                                <li>Software Design (CST 338)</li>
                                <li>Introduction to Database Systems (CST 363)</li>
                                <li>Introduction to Computer Architecture (CST 237)</li>
                                <li>Introduction to Data Science (CST 383)</li>
                                <li>Multimedia Design and Programming  (CST 205)</li>
                                <li>Internet Programming (CST 336)</li>
                                <li>Design and Analysis Algorithms  (CS 170)</li>
                                <li>Operating Systems(CST 334)</li>
                                <li>IOS Programming (CST 499)</li>
                                <li>Computer Science Capstone (CST 495)</li>
                                <li>Probelm Solving/Programming (CST 231)</li>
                                <li>Data Structures and Algorithms (CST 238)</li>
                                <li>Object Oriented Programming (CST 235)</li>
                            </ul>
                            <p className="subTitle" >Other</p>
                            <ul className="eduList">
                                <li>Race Gender and Class in the Digital World (CST 462S)</li>
                                <li>Discrete Mathematics (Math 170)</li>
                                <li> General Physics/Mechanics (Physics 4A)</li>
                                <li> General Physics/Electricity and Magnetism (Physics 4B)</li>
                                <li> General Physics/Waves, Heat, Light and Modern Physics (Physics 4C)</li>
                                <li>Differential Equations (Math 5)</li>
                                <li>Linear Algebra (Math 4)</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}
export default Education