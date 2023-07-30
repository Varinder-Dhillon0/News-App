import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import Prev from "./preview2";

export default function Search(){

    const {state} = useLocation();
    const search = state.search;

    const [news,setnews] = useState([]);

    useEffect(() => {

        const allnews = async () => {
            console.log("ok" , search)
            const res = await fetch(`https://saurav.tech/NewsAPI/everything/cnn.json`).then(
            res => {
              return res.json();
            }
          ).catch(err => {
            console.log(err);
          });
    
          setnews(res.articles);
          console.log(news);    
    
        }
        allnews();
        
      }, [])

    return(
        <>
        <center><h2 style={{marginBottom : "20px"}}>{news.length > 0 ? `(${news.length}) Results` : ""}</h2></center>
        
        <div className='news-container2'>
            {news.length>0 ? news.map((item, index) => {
            return <Prev key={index} news={item}></Prev>
            }): (<center><h2>Loading...</h2></center>)
        
        }
      </div>
        </>
    )
}

