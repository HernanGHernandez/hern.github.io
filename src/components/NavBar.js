import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button, Container, NavbarBrand } from 'react-bootstrap';
import "../styles/NavBar.css";
import { FaEllipsisH } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

    // class creation = initial state
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false)
    // const location = useLocation();

    // useEffect(() => {
    //     setClick(!click);
    // }, [location]);



    const handleClick = () => {
        setClick(!click);
    }

    // show navbar
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    // Window scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    // NAVBAR SHOW  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    // active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <header className={`acitve ${show && 'hidden'}`}>
            {/* expand="lg" */}
            {/* {scrolled ? "scrolled" : ""} */}
            {/* `${scrolled ? "scrolled" : ""} ${show && nav.navbar}` */}
            <Navbar className={scrolled ? "scrolled" : ""} id={click ? "open" : "close"} expand="lg">
                <Container>

                    {/* Logo */}
                    <NavbarBrand className='brand-name' href="#home">
                        Hernan Hernandez
                    </NavbarBrand>

                    <Navbar.Toggle>
                        {/* hamburger side button \*/}
                        <span className='toggleButton' onClick={handleClick}>
                            {click ? <FaEllipsisH /> : <TbArrowBack />} </span>
                    </Navbar.Toggle>

                    <Navbar.Collapse>
                        {/* links for navbar*/}
                        <Nav className='ms-auto'>
                            {/* <div className="links"> */}
                            {/* <div className="navbar-nav ms-auto"> */}
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}> About </Nav.Link>
                            <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}> Education </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}> Projects </Nav.Link>
                            {/* </div> */}
                            {/* </div> */}
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </header >
    )
}

export default NavBar