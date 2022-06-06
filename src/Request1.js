const API_KEY = "1dfecf8eb1c47d7ee7665d9f670ea821";


const User_request = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&languages=es-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantries :`/discover/movie?api_key=${API_KEY}&with_genres=99`,


}
export default User_request