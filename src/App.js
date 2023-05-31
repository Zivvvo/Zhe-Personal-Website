import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/Projects';
import Resume from './pages';
import ArtGallery from './pages';
import Footer from "./pages/Footer";
import Login from "./pages/login";


function App() {
  const [state, setState] = useState("hello world");

  //make API call to express server
  useEffect(()=>{
    fetch('/express_backend')
    .then(
      response => {
        console.log(response);
        
        return response.json()})
      .then(
        res => {console.log(res);
          
          setState(res.express);
          console.log(state);
        }
      )
      
      

  });

  
  

  return (  
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects'  element={<Projects/>}/>
        <Route path="/Resume"  element= {<Resume/>}/>
        <Route path="/ArtGallery"  element= {<ArtGallery/>}/>  
        <Route path="/signin"  element= {<Login/>}/> 
      </Routes>
      
      <Footer/>
      
    </Router>
  );
}

export default App;
