import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewsContext } from "../NewsContext";


function Nav(props) { 
  
  let currCategory = props.Category[0];
  currCategory =  currCategory === '/' ? 'Business' : currCategory.charAt(0).toUpperCase() + currCategory.substr(1);

   return (
    
      <nav>          
         <NavLink  to="/" className="ripple"> {currCategory} - Top News </NavLink>
         <NavLink  to="/category" className="ripple" >Categories</NavLink> 
      </nav>

      
   ); 
  
}

// Added to connect NewsCategories
// To pass props to News
// To set pass selected category
const Navigation = props => (
   <NewsContext.Consumer>
     {( state ) => (
       <Nav
         {...props}
         Category={state}
       />
     )}
   </NewsContext.Consumer>
 )

export default Navigation;
