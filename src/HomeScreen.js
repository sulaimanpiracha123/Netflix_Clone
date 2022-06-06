import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner'
import User_request from './Request1'
import Row1 from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
          <Banner/>
          <Navbar/>
          <Row1 title="Netflix Orignal"  
          fetchUrl={User_request.fetchNetflixOriginals} 
           isLargeRow/>
           <Row1 title= "Action Movie" fetchUrl={User_request.fetchTrending}/>

          <Row1 title="Top Rated"  fetchUrl={User_request.fetchTopRated}/>
           <Row1 title= "Action Movie" fetchUrl={User_request.fetchActionMovies}/>
           <Row1 title= "Comedy Movie" fetchUrl={User_request.fetchComedyMovies}/>
           <Row1 title= "Horror Movie" fetchUrl={User_request.fetchHorrorMovies}/>
           <Row1 title= "Romance Movie" fetchUrl={User_request.fetchRomanceMovie}/>
           <Row1 title= "Documantries Movie" fetchUrl={User_request.fetchDocumantries}/>







    </div>
 
  )
}

export default HomeScreen