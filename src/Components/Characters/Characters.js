import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import Nav from './Nav/Nav'
import './characters.scss'



const Characters = ()=> {

  useEffect(()=> {
    fetchCharacters();
  },[]);

  const [items, setItems] = useState([]);
  const fetchCharacters = async ()=>{
    const data = await fetch('https://api.got.show/api/show/characters');
    
    const items = await data.json()
    setItems(items);
    console.log(items);
  }

    return (
      <div>         
         {items.map(item =>(
         <h1 key={item.id}>
         <Link to={`/characters/${item.name}`}> {item.name} </Link>
         </h1>
         ))};
               
      </div>
    );
  }

export default Characters;