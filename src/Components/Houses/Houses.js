import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouses } from './services/house.service';
import '../Characters/characters.scss'
import Search from '../Search/Search'


const initialState= {
  original:[],
  copy:[]
}
const Houses = ()=> {

  useEffect(()=> {
    fetchHouses();
  },[]);

  const [state, setState] = useState(initialState);
  const fetchHouses = async ()=>{
    const data = await getHouses();
    
    const items = await data.json()
    const itemWithImage= items.filter((e)=>{
      return Boolean(e.logoURL)
    })
    setState({original:itemWithImage,copy:itemWithImage});
    
  }
  function filterHouses(string){
    const filtered = state.copy.filter(el => el.name.trim().toLowerCase().includes(string.trim().toLowerCase()))
    setState({...state, copy:filtered}) 
    if(string.trim() === ''){
      setState({...state, copy:state.original}) 
    }
  }

    return (

      <>
      <Search filterBy={filterHouses}></Search>
      <div className="container-fluid container--margin" >
        <div className="row">
          {state.copy.map(item =>(
            <div className="col-sm-12 col-md-4 col-lg-2" >
              <figure className="b-gallery__item">
              <Link  to={`/houses/${item.name}`}> 
              <img src={item.logoURL} key={item.logoURL} 
                   alt=" " 
                   className="b-gallery__img"
                   />
              <figcaption key={item.name} className="b-gallery__text font-got show-hover"> {item.name} </figcaption>
            </Link>
              </figure>

            </div>

          ))};

        </div>
      </div>
      </>
    );
  }

export default Houses;