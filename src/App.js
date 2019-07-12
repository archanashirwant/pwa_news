import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Media from "react-media";
import SwipeableRoutes  from "react-swipeable-routes";
import NewsComponent from './components/News';
import CategoryList from './components/CategoryList';
import NewsCategories from './components/NewsCategories';
import Navigation from './components/Navigation';
import { NewsCategoryProvider } from "./NewsContext";


const MobileView = (props) => (
 <Fragment>
     <Navigation category={props}/>
     <div className="container">
          <SwipeableRoutes>
               <Route path="/:category?" component={NewsComponent}   /> 
               <Route path="/category" component={CategoryList} />              
          </SwipeableRoutes>   
     </div>
 </Fragment>
);


const DesktopView = (props) => (
   <Fragment>
      <div  className="desktop-container">
           <div className="category-box">
                <div className="category-group">
                     <Route path="/" component={NewsCategories} />
                </div>
           </div>
           <div className="news-area">
                <div className="container">
                     <Route path="/:category?" component={NewsComponent}/>
                </div>          
           </div>
      </div>
   </Fragment>
);


function App(props) {   
    
  return (
  
          <BrowserRouter>
               <Switch>
                    <Fragment>
                         <header>
                              <div className='header-title'>News</div>
                         </header>     
                         <NewsCategoryProvider>  
                              <Media query="(max-width: 767px)">
                                        {matches =>
                                             matches ? (
                                             <MobileView />
                                             ) : ( 
                                             <DesktopView />
                                             )
                                        } 
                              </Media>
                         </NewsCategoryProvider>  
                    </Fragment> 
               </Switch>
          </BrowserRouter>
  
  );
}

export default App;


