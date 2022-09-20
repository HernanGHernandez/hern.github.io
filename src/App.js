import React from 'react'

import './App.css';
import './styles/NavBar.css'
import "./styles/About.css";
import "./styles/Education.css";
import "./styles/Projects.css";
import "./styles/Footer.css";

import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { About } from "./components/About"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <About />
        <Education />
        <Projects />
        <Footer />
        {/* <Routes>
          <Route path='/' />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
