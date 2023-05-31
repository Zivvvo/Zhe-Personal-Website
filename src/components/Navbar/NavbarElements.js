import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #FFFFFF;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    justify-content: center;
}
`;

export const SideNav = styled.nav`
  background: #000000;
  height: 85px;
  display: block;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #ADD8E6;
      }
  }
`;

export const NavMenu = styled.div`
  display: flex;

  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 0;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: None;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
flost: right;
  color: #808080;
  display: block;
  align-items: right;
  align-text: right;
  text-decoration: none;
  padding: 0 0rem;
  height: 100%;
  margin-top: 25px;
  margin: 10px;
  cursor: pointer;
  &.active {
    color: #FFFFFF;
  }
`;
  

export const MobileMenu = styled.div`

display: none;

@media screen and (max-width: 768px) {
display: Flex;
background: #000000;
justify-content: center;
align-items: right;

border: 10px;
aligh-text: right;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
}
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24em;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

