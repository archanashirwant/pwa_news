import React , {useContext} from 'react';
import { NewsContext } from "../NewsContext";
import {categories} from "../Parameters";

const NewsCategories = (props)=> {

  const [ , setCategory ] = useContext(NewsContext);
  
  function updateCategory(selectedCategory) {

    setCategory(selectedCategory);

  }
  
  return ( 
    categories.map((cat,index) => (
      <div key={index} onClick={((e) => { updateCategory(cat) })} className= {`category-card ${cat}`}> {cat.charAt(0).toUpperCase() + cat.substr(1)}</div>
    ))

  );
}

export default NewsCategories;
