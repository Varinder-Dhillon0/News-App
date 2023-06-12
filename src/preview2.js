import img from "./imgplaceholder.jpg"
import {AiFillCaretRight} from "react-icons/ai"

export default function Prev(props){
    
    const {news} = props;

    return(
        <div className="prev2">
            <div className="img">
            <img src={news.urlToImage ? news.urlToImage : img} alt={news.title}/>
            </div>
            
            <div className="desc">
                <h2>{news.title?.substring(0,150)}</h2>
                <p>{news.description?.substring(0,200)}...</p>
                <h4 style={{color: "#3c73d9"}}>{news.source.name}</h4>
                <a href={news.url}>Read more <AiFillCaretRight size={14} className="arrow-right"></AiFillCaretRight> </a>
            </div>
        </div>
    )
}