import React, {useContext} from 'react';
import { NewsContext } from "../NewsContext";
import { NavLink } from 'react-router-dom';
import {categories} from "../Parameters";


const CategoryList = (props)=> {

    const context = useContext(NewsContext);
    const setCategory = context[1];

    function updateCategory(selectedCategory) {
       
        setCategory(selectedCategory);
        
    }

    return ( 
        categories.map((cat,index) => (
            <div key={index} className="category-group">
                <NavLink  to={`${cat}`} className={`category-card ${cat}`} onClick={((e) => { updateCategory(cat) })} rel="noopener noreferrer" >{cat.charAt(0).toUpperCase() + cat.substr(1)}</NavLink>
            </div>
        ))
    
    );
}

export default CategoryList;
