import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/Langconstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { addgptMovies } from "../utils/gptslice";

const GptSearchPlace = ()=>{

  const dispatch = useDispatch();
  const LangChange = useSelector(store=>store.Language.langkey);
  
  const SearchText = useRef(null);
  const searchMoviesTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_Options);

    const json =  await data.json();

    return json.results;
    
  }
 
  const handleSearchText = async()=>{
    
   const gptquery =  "Act as a Movie Recommendation system and suggest some movies for the query : " +
   SearchText.current.value +
   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
   
   const gptChoices =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery }],
      model: 'gpt-3.5-turbo',
    });
   if(!gptChoices.choices){
    console.error("No movies found from Gpt");
    return;
   };
  
    console.log(gptChoices.choices?.[0]?.message?.content.split(","));

    const gptMovies = gptChoices.choices?.[0]?.message?.content.split(",").map(movie=>movie.trim());

    const promiseArray = gptMovies.map((movie)=>searchMoviesTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addgptMovies({movienames:gptMovies, movieresults:tmdbResults}));
   
  }
    return(
        <div className="pt-[10%] flex justify-center" >   
          <form className="p-2 m-6 bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref={SearchText}
            type="text" placeholder={lang[LangChange].gptplaceholdersearch} className="px-4 m-4 text-white border border-white col-span-9" />
            <button className="text-white bg-red-500 rounded-lg p-2 m-4 col-span-3"onClick={handleSearchText}>{lang[LangChange].Search}</button>
          </form>
        </div>
        
    )
};

export default GptSearchPlace;