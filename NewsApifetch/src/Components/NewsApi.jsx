import { useEffect, useState } from "react";
function NewsApi(){
    const[news,setNews]=useState([])
    useEffect(() =>{
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-12&sortBy=publishedAt&apiKey=cfdd400d36384842baa3b29c8ec84f1c").
        then(Response=>Response.json()).
        then(data=>setNews(data.articles))
    }, [ ]);
    return(
        <>
            <h1 className="main-heading">NEWS AGRIGATOR</h1>
            <div className="maindiv">
            {news.map((item)=>{         
                return(
                    <div className="card">
                    <h1 className="card-heading">{item.source.name}</h1>
                    <p className="card-url"><img src={item.urlToImage} alt="description" className="card-image" /></p>
                    <p className="card-title">{item.title}</p>
                    <p className="card-description">{item.description}</p>
                    <p className="card-author">{item.author}</p>
                    <p className="card-author">{item.publishedAt}</p>
                  </div>
                )
            })}
            </div>
        </>
    )
}

export default NewsApi;