import { useSelector } from "react-redux";
import MovieList from "./Movielist";


const SeconderyComponent = ()=>{
    const movies = useSelector(store=>store.movies);
    return movies && (
        <div className="bg-black">
        <div className="relative z-10 -mt-48  bg-gradient-to-b from-black via-black/80 to-transparent pb-12 px-12 w-screen">
         <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
         <MovieList title={"TopRated"} movies={movies.TopRatedMovies}/>   
         <MovieList title={"Popular"} movies={movies.PopularMovies}/>   
         <MovieList title={"Upcoming"} movies={movies.UpcomingMovies}/>   
        </div>
        </div>
    )
};

export default SeconderyComponent;