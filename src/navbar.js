import {MdOutlineSearch} from "react-icons/md"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Navbar(){

    const [search ,setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        const keyDownHandler = (event) =>{
            if(event.key === 'Enter'){
                console.log(search);
                navigate(`/search`, {state : {search}})
            }
        }
        
        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, [search])

    return(
        <>
        <div className="navbar">
            <a href="/"><h1>InSight</h1></a>
            <div>
                <p><MdOutlineSearch></MdOutlineSearch></p>
                <input className="search" onChange={(e) => setSearch(e.target.value)}></input>
            </div>
        </div>
        </>
    )
}