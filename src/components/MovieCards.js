import { Image_Logo } from "../utils/constants";

const MovieCard = ({posterpath})=>{
    if(!posterpath) return null;
    return(
        <div className="w-48 pr-4">
            <img alt="logo" src={Image_Logo + posterpath}/>
        </div>
    )
}

export default MovieCard;