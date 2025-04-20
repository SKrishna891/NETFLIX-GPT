import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainComponent = ()=>{
    const movies = useSelector(store => store.movies?.NowPlayingMovies);

    if(!movies) return;
    const maniMovie =   movies[0];
    console.log(maniMovie);

    const {original_title,overview,id} = maniMovie;
    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id}/>  
        </div>
    )
}

export default MainComponent;