import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';

import { FaEllipsisH } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import "../styles/NavBar.css";

export const NavBar = () => {

    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [navbar, setNavbar] = useState(false);
    // const [hideNavbar, settHideNavbar] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const showHeader = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 1000) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        console.log('useEffect is running!');
        window.addEventListener('scroll', showHeader);
        return () => {
            window.removeEventListener('scroll', showHeader);
        };
    }, []);

    return (
        <Navbar className={navbar ? 'navbar active' : 'navbar'} expand="lg">
            <Container >
                {/* Logo */}
                <NavbarBrand className='brand-name' href="#home" >
                    Hernan Hernandez
                </NavbarBrand>
                <Navbar.Toggle>
                    {/* hamburger side button \*/}
                    <span className='toggleButton' onClick={handleClick}>
                        {click ? <TbArrowBack /> : <FaEllipsisH />}
                    </span>
                </Navbar.Toggle>


                <Navbar.Collapse>
                    {/* links for navbar*/}
                    <Nav className='ms-auto'>

                        <Nav.Link
                            href="#About"
                            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('about')}> About
                        </Nav.Link>
                        <Nav.Link
                            href="#education"
                            className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('education')}> Education
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('project')}> Projects
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar