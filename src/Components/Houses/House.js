import React, { useState, useEffect } from 'react';
import { getHouse } from './services/house.service';
// import './characters.scss';

const House = ({match})=> {
    const namePetition = match.params.name; 
    useEffect(()=> {
      fetchHouse();
    }, []);
  
    const [house, setHouse] = useState({});
  
    const fetchHouse = async ()=>{
      const fetchHouse = await getHouse(namePetition);
      const json = await fetchHouse.json();
      const house = json.shift();
  
      setHouse(house)
      console.log(house);
    };
  
      return (
        <div>
          <div> 
            <h4>{house.name}</h4>  
            <img src={house.logoURL} alt=" " key={house.id} />             
          </div>  
          <div> 
            <p>{house.words}</p>             
            <p>{house.seat}</p>
            <p>{house.region}</p>
            <p>Allegiances: {house.allegiance}</p>
            <p>{house.religion}</p>
            <p>{house.createdAt}</p>  
          </div>       
        </div>
      );
    }
  
  export default House;