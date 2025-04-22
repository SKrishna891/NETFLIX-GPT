import { Bg_Logo } from "../utils/constants";
import GptSearchPlace from "./GptSearchPlace";


const GptSearch = ()=>{
    return(
       <div>
        <div className="absolute -z-10 ">
        <img src={Bg_Logo}
        alt="logo" />
        </div>
        <GptSearchPlace/>
        </div>
    )
};

export default GptSearch;