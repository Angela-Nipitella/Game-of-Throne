import React from 'react';
import {
    Link, 
    useLocation, 
  } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// IMAGES
import spainFlag from '../../assets/spain.svg';
import uKFlag from '../../assets/united-kingdom.svg';

// STYLES
import '../../../src/assets/style.scss';
import './header.scss';


// pages > houses > Houses.js
//                  components > Gallery.js

const Header = ()=>  {

  let {pathname} = useLocation();
  const regEx =/characters\/.{1,}|houses\/.{1,}/;
  
  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    console.log(lang)
  }


    return (
    
        <nav className="c-header">
          
           {(regEx.test(pathname)) ? 
              <ul className="c-header__ul-start"> 
              
              <li><i className="c-header__img c-header__img-color icon-left-arrow-1" alt="flecha volver" ></i > volver</li>   
            
              </ul>
              : null
          }    
          
          <ul className="c-header__ul-end">

           {
             (pathname!=='/') &&
           <Link to="/"> 
           <li>
             <i className="c-header__img c-header__img-color icon-home-1" alt="Icono casa"></i>
           </li>
            </Link>
           } 
           <li onClick={()=> handleClick('es')}><img src={spainFlag}  
                    className="c-header__img" 
                    alt="Bandera España"
                    /></li>

           <li  onClick={()=> handleClick('en')}><img src={uKFlag} 
                    className="c-header__img" 
                    alt="Bandera Inglaterra"
                   /></li>
          </ul>
        </nav>
      
    
    )
}

export default Header;