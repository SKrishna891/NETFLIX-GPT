import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const NowPlayingMovies = useSelector(store=>store.movies.NowPlayingMovies);
    const getNowPlayingmovies =  async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
        const json =  await data.json();

        dispatch(addNowPlayingMovies(json.results));
    };
  useEffect(()=>{
    !NowPlayingMovies && getNowPlayingmovies();
  }
  ,[]);
}

export default useNowPlayingMovies;