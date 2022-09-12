import React from 'react'
import './App.css';
import './styles/NavBar.css'
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Banner />
        <Routes>
          <Route path='/' />
          {/* <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
