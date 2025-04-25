import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const PopularMovies = useSelector(store=>store.movies.PopularMovies);
    const getPopularMovies = async ()=>{
   const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_Options);

   const json = await data.json();

   dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>{
        !PopularMovies && getPopularMovies();
    },[]);

}

export default usePopularMovies;