import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from './services/characters.service';
import Search from '../Search/Search'

import 'bootstrap/dist/css/bootstrap.min.css';
import './characters.scss'
import App from '../../App';


const initialState= {
  original:[],
  copy:[]
}
const Characters = ()=> {

  useEffect(()=> {
    fetchCharacters();
  },[]);
  
  const [state, setState] = useState(initialState);
  const fetchCharacters = async ()=>{
    const data = await getCharacters();
    
    const listChars = await data.json()
    const finalChars= listChars.filter((element)=>{
      return Boolean(element.image)
    })
    setState({original:finalChars,copy:finalChars});
  }

  function filterChars(string){

    const filtered = state.copy.filter(el => el.name.trim().toLowerCase().includes(string.trim().toLowerCase()))
    
    setState({...state, copy:filtered}) 
    if(string.trim() === ''){
      setState({...state, copy:state.original}) 
    }

  }
  


   return (
     <>
    <Search filterBy={filterChars}></Search>
    <div className="container-fluid container--margin" > 
      <div className="row">

       {state.copy.map(item =>(
        <div className="col-sm-12 col-md-4 col-lg-2" key={item.id}>
          <figure className="b-gallery__item"> 
            <Link  to={`/characters/${item.name}`}> 
              <img src={item.image} key={item.slug} 
                   alt=" " 
                   className="b-gallery__img"
                   />
              <figcaption key={item.id} className="b-gallery__text font-got show-hover"> {item.name} </figcaption>
            </Link>
          </figure>
        </div> 
       ))};
             
      </div>
    </div>     
    </>   
  );
  }


export default Characters;



