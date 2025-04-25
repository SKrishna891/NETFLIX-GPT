import { Bg_Logo } from "../utils/constants";
import GptSearchPlace from "./GptSearchPlace";
import GptSearchSuggestions from "./GptSearchSuggestions";


const GptSearch = ()=>{
    return(
       <div>
        <div className="fixed -z-10 ">
        <img src={Bg_Logo}
        alt="logo" />
        </div>
        <GptSearchPlace/>
        <GptSearchSuggestions/>
        </div>
    )
};

export default GptSearch;