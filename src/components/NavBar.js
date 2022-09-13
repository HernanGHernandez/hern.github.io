import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button, Container, NavbarBrand } from 'react-bootstrap';
import "../styles/NavBar.css";
import { FaEllipsisH } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export const NavBar = () => {

    // class creation = initial state
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setClick(!click);
    }

    useEffect(() => {
        setClick(!click);
    }, [location]);

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

    // active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <header>
            <Navbar className={scrolled ? "scrolled" : ""} expand="lg" bg="light" variant="light" id={click ? "open" : "close"} >
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
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> About </Nav.Link>
                            <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> Education </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> Projects </Nav.Link>
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