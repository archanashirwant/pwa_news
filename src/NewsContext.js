import React, { useState, createContext } from 'react';

const NewsContext = createContext();




const NewsCategoryProvider = (prop) => {

  /*  const [category,setCategory] = useState({
        newsCat : ['business', 'entertainment', 'general','health', 'science','sports','technology'],
        currCategory:'business',
    });
*/

    const [currCategory,setCategory] = useState("business");

    return (
        <NewsContext.Provider value={[currCategory,setCategory]}>
          {prop.children}
        </NewsContext.Provider>
      );

};

export { NewsContext, NewsCategoryProvider };
