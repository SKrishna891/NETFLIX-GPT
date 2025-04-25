import { useDispatch, useSelector } from "react-redux";
import { addPlayingTrailerVideos } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";

 
 
 const useMovieTrailer = (movieid) =>{

   const dispatch = useDispatch();

   const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    const getNowPlayingVideo = async () => {

       const data = await fetch( "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US", API_Options);
    
        const json = await data.json();
        
        const filtervideos = json.results.filter((video) => video.type === "Trailer");
     
    
        const trailer = filtervideos[0];
        dispatch(addPlayingTrailerVideos(trailer));
      };
    
      useEffect(() => {
       !trailerVideo && getNowPlayingVideo();
      }, []);
 }

  export default useMovieTrailer;