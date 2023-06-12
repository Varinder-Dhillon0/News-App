import img from "./imgplaceholder.jpg"
import {AiFillCaretRight} from "react-icons/ai"

export default function Npreview(props){

    const {news} =  props;
    console.log(news);

    const postedAt = new Date(news.publishedAt);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = postedAt.toLocaleDateString('en-US', options);
    return(
        <div className="npreview">
            <div className="img">
                <img src={news.urlToImage ? news.urlToImage : img} alt="prev-img" />
            </div>
            
            <div className="desc">
                <h3>{news.title.substring(0,70)}...</h3>
                <hr/>
                <div>
                    <h4>{news.source.name}</h4>
                    <h5>{date}</h5>
                    
                </div>
                <a className="read-more" href={news.url}>Read more <AiFillCaretRight size={14} className="arrow-right"></AiFillCaretRight> </a>
            </div>
        </div>
    )
}