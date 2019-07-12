import React,{useState,useEffect} from "react"
import { NewsContext } from "../NewsContext";
import  Loader from "./Loading";

function News(props) { 
    
  const [fetchedNews, setFetchedNews] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
       
  function getCategory() {
   
    if(props.Category[0]) {
      
      return props.Category[0];

    }else if(props.match && props.match.params.category) {

      return props.match.params.category;
    }
    else {
       return 'business';
    }
    
  }    

  let selectedCategory =  getCategory();

  const getNews = async () => {   
       
    let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=8ce52954572c4edba432a452020a8d5c&category='+ selectedCategory;
    
    const response = await fetch(url);
    const json = await response.json();
    setFetchedNews(json);
    window.localStorage.setItem([selectedCategory],JSON.stringify(json));    
    setIsLoading(false);

  };

  useEffect(() => {       

     if (!window.navigator.onLine) {
       let loc_res = JSON.parse(localStorage.getItem([selectedCategory]));
       setFetchedNews(loc_res);
       setIsLoading(false);
     }else{
       getNews();
     }

  },[selectedCategory]);

    let i=0;

    return(
        isLoading ? (

            <div className="vertical">
              <Loader />
            </div>
            
          ) : (
              
            <div className="vertical">
                      
            {   
                fetchedNews.articles.map(article => (
                    <a  key={i++} className="card" target='_blank' href={article.url} rel="noopener noreferrer">
                                
                        <div className="content-placeholder">
                            <div className="news_header">{article.title}</div>                    
                        </div>
                        <div className="image-placeholder">
                            <img alt={article.title} src={article.urlToImage} width="100%" height="100%" />
                        </div>
                    </a>
    
                ))
            }
      
            </div> 
        )    
    );
}


// Added to connect NewsCategories
// To pass props to News
// To set pass selected category
const NewsWithCategory = props => (
    <NewsContext.Consumer>
      {( state ) => (
        <News
          {...props}
          Category={state}
        />
      )}
    </NewsContext.Consumer>
  )


export default NewsWithCategory;



