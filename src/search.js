import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import Prev from "./preview2";

export default function Search(){

    const {state} = useLocation();
    const search = state.search;

    const [news,setnews] = useState([]);

    useEffect(() => {

        // const allnews = async () => {
        //     console.log("ok" , search)
        //     const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=10e5ac0f27a74b4b81b602310f8c5e03`).then(
        //     res => {
        //       return res.json();
        //     }
        //   ).catch(err => {
        //     console.log(err);
        //   });
    
        //   setnews(res.articles);
        //   console.log(news);    
    
        // }
        // allnews();

        setnews([
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Issy Ronald, CNN",
                "title": "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
                "description": "\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.",
                "url": "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
                "publishedAt": "2022-05-05T10:06:14Z",
                "content": "(CNN)\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag… [+2830 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Esha Mitra, Rhea Mogul",
                "title": "A 13-year-old girl told the police she had been gang-raped. Then a police officer allegedly raped her",
                "description": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.",
                "url": "https://www.cnn.com/2022/05/05/india/india-rape-teenager-police-arrested-intl-hnk/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220505013803-lalitapur-india-map.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-05-05T09:58:01Z",
                "content": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.\r\nAuthorities in U… [+4395 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Reuters",
                "title": "Turkey's inflation hits two-decade high of 70%",
                "description": "Turkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commodity prices after last year's lira crash.",
                "url": "https://www.cnn.com/2022/05/05/economy/turkey-inflation-soars/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505053006-istanbul-shooppers-0406-super-tease.jpg",
                "publishedAt": "2022-05-05T09:37:48Z",
                "content": "IstanbulTurkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commod… [+1030 chars]"
            }
        ]);
      }, [search])

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

