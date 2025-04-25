import { useSelector } from "react-redux";
import MovieList from "./Movielist";

const GptSearchSuggestions = ()=>{

    const {movienames, movieresults} = useSelector(store=>store.Gpt);
    if(
        !Array.isArray(movienames)||
        !Array.isArray(movieresults)||
        movienames.length=== 0||
        movieresults.length===0
    ) return null;
    return(
        <div className="bg-black/80 text-white">
    <div>
     {movienames.map((moviename,index)=> 
     
     <MovieList key={moviename} title={moviename} 
     movies={movieresults[index]}/>
     )}
    </div>
        </div>
    )
};

export default GptSearchSuggestions;