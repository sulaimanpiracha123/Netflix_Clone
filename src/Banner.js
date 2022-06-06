import axios from './local_axios';
import React,{useEffect,useState} from 'react'
import User_request from './Request1'
import "./css/banner1.css"


function Banner() {
    const [Movie,SetMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(User_request.fetchNetflixOriginals);
            //console.log(request.data.results)

            SetMovie(request.data.results[Math.floor(Math.random() *request.data.results.length-1)])
            //console.log(Math.floor(Math.random() *request.data.results.length-1))
        }
        fetchData();
    },[])






  return (
    <div className='banner1' style={{backgroundImage:`url('https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}')`, backgroundPosition:'center',backgroundSize:'cover'}}>


        
        <div className='banner_content'>
            <h1 className='banner_title'>
                {Movie.title|| Movie.original_name || Movie.name}
                {/* {Movie?.original_name || Movie?.name} */}
            </h1>

            <div className='banner_button'>
            <button>Play</button>
            <button>My List</button>
           </div>

        <div className='banner_description'>
            <p> 
                {Movie.overview}

            </p>
        </div>
        </div>

        <div className='banner_fade'>

        </div>
        </div>
  )
}

export default Banner