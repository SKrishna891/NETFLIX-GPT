
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SeconderyComponent from "./seconderyComponet";

const Browse = () =>{
    useNowPlayingMovies();
    return(
        <div>
<Header/>
<MainComponent/>
<SeconderyComponent/>
        </div>
    )
};

export default Browse;