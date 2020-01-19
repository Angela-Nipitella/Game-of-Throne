import React from 'react';
import gOtBg from '../../assets/got_home.svg';
import './home.scss'

const Home = ()=> {
    return (
      <div className="c-home__background"> 
         {/* <img src={gOtBg} alt="background Game of thrones"/>         */}
         <p className="c-home__title">
           GAME OF THRONE
         </p>        
      </div>
    );
  }
  
export default Home;
 