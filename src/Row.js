import axios from './local_axios';
import React, { useEffect, useState } from 'react';
import "./row.css"

function Row1({title,fetchUrl,isLargeRow}) {


    const [movies,SetMovie] = useState([]);
    const base_URL = "https://image.tmdb.org/t/p/w500/";


    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchUrl)

            SetMovie(request.data.results)
            return request
        }
        fetchdata();


    },[fetchUrl]);
    console.log(movies)
    return(
<div className='row_movie'>
    <h2>{title}</h2>
    <div className='row_poster'>
                {
                    movies.map((movie)=>(
                    <img src={`${base_URL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} className={`rowposter ${isLargeRow && "largeImage"}`} key= {movies.id}/>
                        
                    ))}
    </div>
    </div>
 )   
}
 
export default Row1