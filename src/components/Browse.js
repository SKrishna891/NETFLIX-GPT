
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


import Header from "./Header";
import MainComponent from "./MainComponent";
import SeconderyComponent from "./seconderyComponet";
import GptSearch from "./GptSearch";


const Browse = () =>{

    const ShowGptSearch = useSelector(store=>store.Gpt.gptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return(
        <div>
<Header/>
{ShowGptSearch? <GptSearch/>: 
<>
<MainComponent/>
    <SeconderyComponent/>
    </>}
        </div>
    )
};

export default Browse;