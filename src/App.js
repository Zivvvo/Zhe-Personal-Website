import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/Projects';
import Resume from './pages';
import ArtGallery from './pages';
import Footer from "./pages/Footer";


function App() {
  

  return (  
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects'  element={<Projects/>}/>
        <Route path="/Resume"  element= {<Resume/>}/>
        <Route path="/ArtGallery"  element= {<ArtGallery/>}/>  
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
