import React from 'react';
// import gOtBg from '../../assets/got_home.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/fonts.scss'
import './home.scss'
import { useTranslation } from 'react-i18next';

function Home() {
 
  const { t, i18n } = useTranslation();

    return (
      <div className="c-home__background"> 
        <div className="c-home__container-title container"> 
          <div className="row padding-top">
            <span className="c-home__title font-got"> {t("title.title")} </span>
          </div>
        </div>   

      </div>
    );
  }
  
export default Home;
 

