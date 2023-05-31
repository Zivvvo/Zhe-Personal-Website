import React, {useState} from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Bars,
  MobileMenu,
  MobileLink,
} from './NavbarElements';
  
function Navbar () {

    const [navToggled, setNavToggled] = useState(false);
    console.log(navToggled);
    
  
    const handleNavToggle = () => {
      setNavToggled(!navToggled);
      console.log("Toggle Button Clicked");
    }

  return (
    <>
      <Nav>
        <Bars onClick={handleNavToggle}/>
        
        <img src = {require("../../Name_Logo.png")} alt= "Zhe Fan"/>

        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/Projects'>
            Projects
          </NavLink>
          <NavLink to='/Resume'>
            Resume
          </NavLink>
          <NavLink to='/ArtGallery'>
            Art Gallery
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      {navToggled ? <MobileMenu>
            <MobileLink to='/'>
            Home
          </MobileLink>
          <MobileLink to='/Projects'>
            Projects
          </MobileLink>
          <MobileLink to='/Resume'>
            Resume
          </MobileLink>
          <MobileLink to='/ArtGallery'>
            Art Gallery
            </MobileLink>

        </MobileMenu>: null}
    </>
  );
};
  
export default Navbar;