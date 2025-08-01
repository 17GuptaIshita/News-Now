import { useEffect, useState } from "react";
import NewsItem from "./newsitem.jsx";
const Newsboard = ({category}) => {

    const[articles,setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category])
  return (
    <div>
        <hr></hr>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {articles.map((news,index)=>{
              return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
        </div>
    </div>
  )
}

export default Newsboard;