import './App.css';
import { useEffect, useState } from 'react';
import Npreview from './newspreview';
import Prev from './preview2';

function App() {

  const [news, setnews] = useState([]);
  const [preview , setpreview] = useState([]);
  const [prev2 , setprev2] = useState([]);
  console.log(preview);

  

  useEffect(() => {
    const allnews = async () => {
      const res = await fetch("https://newsapi.org/v2/everything?q=india sports&apiKey=10e5ac0f27a74b4b81b602310f8c5e03").then(
        res => {
          console.log(res.articles);
          setnews(res.articles);
          setpreview(res.articles.slice(0,3));
          setprev2(res.articles.slice(3, 15);
          return;
        }
      ).catch(err => {
        console.log(err);
      });
      
      
    }
    allnews();
  },[])


  return (
    <div className="App">
      <center><p style={{ fontSize: "25px", fontWeight: "500" }}>Browse News</p></center>
      <div className="news-container">
      {news.length===0 && <h2>Loading...</h2>}
        {news.length>0 && preview.map((item, index) => {
          return <Npreview news={item} key={index} />
        })}
      </div>

      <div className='news-container2'>
        {prev2.map((item, index) => {
          return <Prev key={index} news={item}></Prev>
        })}
      </div>

    </div>
  );
}

export default App;
