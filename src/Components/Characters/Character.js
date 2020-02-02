import React, { useState, useEffect } from 'react';
import { getCharacter } from './services/characters.service';
import { getHouse } from '../Houses/services/house.service';

// import { Link } from 'react-router-dom'
// import Nav from './Nav/Nav'
import './characters.scss'



const Character = ({match})=> {
  const namePetition = match.params.name; 
  useEffect(()=> {
    fetchCharacter();
  }, []);

  const [character, setCharacter] = useState({});

  const fetchCharacter = async ()=>{
    const fetchCharacter = await getCharacter(namePetition);
    const character = await fetchCharacter.json();

    if(character.house){
    const fetchHouse = await getHouse(character.house);
      const json = await fetchHouse.json();
      const house = json.shift();
      character.logoURL=house.logoURL
    }

      console.log(character)
    setCharacter(character)
    // console.log(character);
  };

    return (
      <div>
        <div> 
          <h4>{character.name}</h4>  
          <img src={character.image} alt=" " key={character.image} />             
        </div>  
               
        <div>
          <img src={character.logoURL} alt=" " key={character.logoURL} />
          <p>Allegiances: {character.allegiances}</p>
          <p>{character.appearances}</p>
          <p>{character.father}</p>
          <p>{character.siblings}</p>
          <p>{character.titles}</p>  
        </div>       
      </div>
    );
}

export default Character;
