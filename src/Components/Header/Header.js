import React from 'react';
import {
    Link
  } from "react-router-dom";
import spainFlag from '../../assets/spain.svg';
import uKFlag from '../../assets/united-kingdom.svg';
import homeI from '../../assets/home (1).svg';
import './header.scss';
// import Houses from '../Houses/Houses';
// import Home from './Components/Home/Home';

// pages > houses > Houses.js
//                  components > Gallery.js

const Header = ()=> {
    return (
    
        <nav className="c-header">
          <ul className="c-header__ul">
            <Link to="/"> 
           <li><img src={homeI} className="c-header__img c-header__img-color" alt="Icono casa"/></li>
            </Link>
           <li><img src={spainFlag}  className="c-header__img" alt="Bandera España"/></li>
           <li><img src={uKFlag} className="c-header__img" alt="Bandera Inglaterra"/></li>
          </ul>
        </nav>
      
    
    )
}

export default Header;