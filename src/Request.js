
const key = process.env.REACT_APP_IMDB_API_KEY;


const requests ={
    requestChangesTV:`https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=true&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc`,
    requestTrending:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US`,
    requestNetflixOriginals:`https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
    requestNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestComedy:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestRomance:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
}
export default requests; 

