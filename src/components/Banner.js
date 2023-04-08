import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../styles/Banner.css";
import hernDrawing from "../assets/img/minimalist-hern.png"
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Banner = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        console.log("you clickd")
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={5} lg={5} className='bannerImg'>
                        {/* <div className='bannerImg'> */}
                        <img className="photo" src={hernDrawing} alt="header_Img" />
                        {/* </div> */}
                    </Col>
                    {/* <Col md="auto"> width contnet</Col> */}
                    {/* <Col xs={9} md={5} xl={6}> */}
                    <Col xs={11} md={6} lg={6} className="header-text">
                        <h1>Hernan Hernandez </h1>
                        <div className="text-block">
                            <Typewriter
                                options={{
                                    strings: ["Hey there!", "Nice to Meet You.", "I'm a graduate from CSUMB with a degreee in Computer Science, Software Engineering", "you'll ge to see some of my projects here and for a more in depth view can head over to my github", "Some hobbies I enjoy doing is finding something new to cook, hitting the gym, or watching a new film.", 'Thanks for visiting!'],
                                    autoStart: true,
                                    delay: 20,
                                    loop: true,
                                    deleteSpeed: 20
                                }}
                            />
                        </div>
                    </Col>
                    {/* <Col xs={2} md={2} xl={1}></Col> */}
                    <Col xs={1} className="Btn-Pos">
                        <Link to="/#About">
                            <button className='dropBtn' onClick={handleClick}>
                                <AiOutlineDown size={35} />
                            </button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </section >
    )
}

export default Banner