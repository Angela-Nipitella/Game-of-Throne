import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../Characters/services/characters.service'
// import Nav from './Nav/Nav';
// import './cronology.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Characters/characters.scss'

const Cronology = ()=> {

  useEffect(()=> {
    fetchCharactersByAge();
  },[]);

  const [charactersByAge, setCharactersByAge] = useState([]);
  const fetchCharactersByAge = async ()=>{
    const data = await getCharacters();
    const json = await data.json()
    const charactersByAge = json.filter((e)=>{

      if(Boolean(e.age)){
      // console.log(Object.entries( e.age))
        if(Boolean(e.age.age)) {
          return true

        } 
      }
      return false
    }).
    sort(
      (a,b)=>{
        // console.log(a);
        
        let temp=0
        if(a.age.age>b.age.age){
          temp= -1
        }else if(a.age.age<b.age.age){
          temp= 1
        }
        return temp;
      }
    ).reverse();


    setCharactersByAge(charactersByAge);
    // console.log(charactersByAge);
  }


    return (
      <div>         
         <div className="row">
          {/* <button onClick="ggg">hola</button> */}
            {charactersByAge.map(item =>(
              <div key={item.id}>
               <figure> 
                 <Link  to={'/cronology'}> 
                  <span> {item.age.age} </span>
                   <figcaption  className=""> {item.name} </figcaption>
                   <img src={item.image}  
                         alt=" " 
                         className=""
                   />
                  </Link>
               </figure>
          </div> 
        ))};
      
</div>
                
      </div>
    );
  }

  export default Cronology;