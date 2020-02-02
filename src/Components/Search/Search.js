import React from 'react';
// import Nav from './Nav/Nav';
// import './cronology.scss'
import './search.scss'
import { IoMdSearch } from "react-icons/io";


const Search = ({filterBy})=> {
   
function handleChange(e){
    e.preventDefault();
    filterBy(e.target.value)
}


    return (
        <div className="search-box">
            <input className="search-text" 
                   type="text" 
                   name="gotsearch" 
                   placeholder="Type to search"
                   onChange={handleChange}/>
            <a className="search-btn"  > <IoMdSearch/> </a>
        </div>
      
    );
  }

  export default Search;