import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import Nav from './Nav/Nav'
import './characters.scss'



const Character = ({match})=> {

  const namePetition = match.params.name; 
  useEffect(()=> {
    fetchCharacter();
  }, []);

  const [character, setCharacter] = useState({});

  const fetchCharacter = async ()=>{
    const fetchCharacter = await fetch(`https://api.got.show/api/show/characters/${namePetition}`);
    const character = await fetchCharacter.json();
    

    setCharacter(character)
    // console.log(character);
  };

    return (
      <div>         
         <h1>{character.name}</h1>  
         <img src={character.image} />             
      </div>
    );
  }

export default Character;