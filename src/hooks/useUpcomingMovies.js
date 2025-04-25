import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector(store=>store.movies.UpcomingMovies);
    const getUpcomingMovies = async ()=>{
        try{
   const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_Options);

   const json = await data.json();

   
  if(!json.results) return null;
   dispatch(addUpcomingMovies(json.results));
        }catch(err){
            console.error("Error fecthing in upcoming movies:",err)
        }
    };
    useEffect(()=>{
       !UpcomingMovies && getUpcomingMovies();
    },[]);

}

export default useUpcomingMovies;