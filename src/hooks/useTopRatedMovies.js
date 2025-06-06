import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const TopRatedMovies = useSelector(store=>store.movies.TopRatedMovies);
    const getTopRatedMovies = async ()=>{
   const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_Options);

   const json = await data.json();

   dispatch(addTopRatedMovies(json.results));
    };
    useEffect(()=>{
       !TopRatedMovies && getTopRatedMovies();
    },[]);

}

export default useTopRatedMovies;