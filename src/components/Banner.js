import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../styles/Banner.css";
import hernDrawing from "../assets/img/minimalist-hern.png"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={3} md={5} xl={5}>
                        <img width={500} src={hernDrawing} alt="header_Img" />
                    </Col>
                    {/* <Col md="auto"> width contnet</Col> */}

                    <Col xs={7} md={5} xl={6}>
                        <h1><span className="tagline">Hernan Hernandez </span></h1>
                        <Typewriter
                            options={{
                                strings: ["Hey there!", "Nice to Meet You.", `I'm a recent CS-Software Engineering grad from CSU Monterey Bay!`, 'Aside from enjoying full stack work', 'i recently found a new hobby in building custom keyboards', 'i also enjoy creating minimalist art.', 'Thanks for visiting!'],
                                autoStart: true,
                                delay: 20,
                                loop: true,
                                deleteSpeed: 20
                            }}
                        />
                    </Col>
                    <Col xs={3} md={2} xl={1}>
                        <button className='dropBtn' onClick={() => console.log('go down to my stuff')}>
                            <AiOutlineDown size={35} />
                        </button>
                    </Col>
                </Row>

            </Container>
        </section >
    )
}

export default Banner