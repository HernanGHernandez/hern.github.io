// import React, { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, ListGroup, Badge, Button, Nav, Tab } from "react-bootstrap";
import "../styles/Projects.css";
import insta from "../assets/img/insta.png"
import flix from "../assets/img/flix.png"
import foodtrack from "../assets/img/foodtrack.png"
import gigster from "../assets/img/gigster.png"
import twit from "../assets/img/twitterLogo.png"
import musicWeb from "../assets/img/musicIcon.png"
import parking from "../assets/img/parkingChat.png"
import myWeb from "../assets/img/personalWeb.png"
import tipCalc from "../assets/img/tipCalc.png"
import wishList from "../assets/img/wishlist.png"



export const Projects = () => {
    const projects = [
        {
            Title: "Parstagram",
            description: "Instagram clone with a custom Parse backend that allows a user to post photos and view a global photos feed",
            imgUrl: insta,
        },
        {
            Title: "Flix",
            description: "Flix is an app that allows users to browse movies from the The Movie Database API",
            imgUrl: flix,
        },
        {
            Title: "Gigster",
            description: "Craiglist clone with mySQL backend that allows a user to post, contact and save jobs",
            imgUrl: gigster,
        },
        {
            Title: "Food Track",
            description: "A platform for food trucks to be able to create a profile and share on a post their current location. Customers will be able to see where their followed/favorite food trucks are currently at.",
            imgUrl: foodtrack,
        },
        {
            Title: "Twit",
            description: "A mock twitter connected to your actual twiiter where you are able to read, post and favorite your tweets",
            imgUrl: twit,
        },
        {
            Title: "Music Search",
            description: "A website where users can search for their favorite aritst and listen to their music via spotify",
            imgUrl: musicWeb,
        },
        {
            Title: "Parking Chat",
            description: "Android app where a user can see available parking spots at school lots",
            imgUrl: parking,
        },
        {
            Title: "Personal Website",
            description: "This website made with react, javascript and css",
            imgUrl: myWeb,
        },
        {
            Title: "Tip Calculator",
            description: "User can calculate certain tip with inputed number",
            imgUrl: tipCalc,
        },
        {
            Title: "Wish List",
            description: "Persistent website where a user can add, update and delete items from their wishlist",
            imgUrl: wishList,
        },
    ];
    // const Box = props => <div className="box">{props.children} </div>;
    return (
        <section className="projects" id="projects">
            <h1><span className="projTitle">Projects </span></h1>
            <Container>
                <Row>
                    <Col>

                        <Tab.Container id="projects-tabs" >
                            {/* <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Active</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Row>

                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Projects