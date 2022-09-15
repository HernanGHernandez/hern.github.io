import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../styles/Banner.css";
import hernDrawing from "../assets/img/minimalist-hern.png"
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Banner = () => {
    // const [move, setMove] = useState(false);

    const handleClick = () => {
        // setMove(!move);
        return <Link to="#about" smooth="true" />
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={1} md={5} xl={5}>
                        <div className='bannerImg'>
                            <img className="photo" src={hernDrawing} alt="header_Img" />
                        </div>
                    </Col>
                    {/* <Col md="auto"> width contnet</Col> */}

                    <Col xs={9} md={5} xl={6}>
                        <h1><span className="tagline">Hernan Hernandez </span></h1>
                        <div class="text-block">
                            <Typewriter
                                options={{
                                    strings: ["Hey there!", "Nice to Meet You.", `I'm a recent CS-Software Engineering grad from CSU Monterey Bay!`, 'Aside from enjoying full stack work', 'i recently found a new hobby in building custom keyboards', 'i also enjoy creating minimalist art.', 'Thanks for visiting!'],
                                    autoStart: true,
                                    delay: 20,
                                    loop: true,
                                    deleteSpeed: 20
                                }}
                            />
                        </div>
                    </Col>
                    <Col xs={2} md={2} xl={1}>
                        <button className='dropBtn' onClick={handleClick}>
                            <AiOutlineDown size={35} />
                        </button>
                    </Col>
                </Row>

            </Container>
        </section >
    )
}

export default Banner