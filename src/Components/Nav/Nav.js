import React from 'react';
import {
    Link
  } from "react-router-dom";
import './nav.scss'
import '../Header/header.scss';
// import Home from './Components/Home/Home';



const Nav = ()=> {
    return (
    
        <nav className="b-nav">
          <ul className="b-nav__ul">
            <Link to="/characters"> 
           <li> Charecters </li>
            </Link>
            <Link to="/houses"> 
           <li> Houses </li>
            </Link>
            <Link to="/cronology"> 
           <li> Cronology </li>
            </Link>
          </ul>
        </nav>
      
    
    )
}

export default Nav;