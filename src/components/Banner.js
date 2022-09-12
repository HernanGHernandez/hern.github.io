import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import "../styles/Banner.css";
import hernDrawing from "../assets/img/minimalist-hern.png"
export const Banner = () => {
    const [loopNum, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 3000;

    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         tick()
    //     }, delta)
    //     return () => { clearInterval(ticker) }
    // }, [text])
    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);

    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2)
    //     }
    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoop(loopNum + 1);
    //         setDelta(500);
    //     }
    // }
    const toRotate = ["Hey there!", "Nice to Meet You.", `I'm a recent CS-Software Engineering grad from CSU Monterey Bay!`, 'Aside from enjoying full stack work', 'i recently found a new hobby in building custom keyboards', 'i also enjoy creating minimalist art.', 'Thanks for visiting!'];
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <img width={500} src={hernDrawing} alt="header_Img" />
                    </Col>

                    <Col xs={12} md={6} xl={7}>
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
                        <button onClick={() => console.log('go down to my stuff')}>
                            <AiOutlineDown size={30} />
                        </button>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner