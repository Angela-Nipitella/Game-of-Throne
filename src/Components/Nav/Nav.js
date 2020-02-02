import React from 'react';
import {
    Link
  } from "react-router-dom";
import './nav.scss'
import '../Header/header.scss';
import { useTranslation } from 'react-i18next';
// import Home from './Components/Home/Home';



const Nav = ()=> {

  const { t } = useTranslation();

    return (
    
        <nav className="b-nav">
          <ul className="b-nav__ul">
            <Link to="/characters"> 
           <li className="font-got"> {t("nav.1")} </li>
            </Link>
            <Link to="/houses"> 
           <li className="font-got"> {t("nav.2")} </li>
            </Link>
            <Link to="/cronology"> 
           <li className="font-got"> {t("nav.3")} </li>
            </Link>
          </ul>
        </nav>
      
    
    )
}

export default Nav;