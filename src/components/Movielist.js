import MovieCard from "./MovieCards";

const MovieList = ({title,movies})=> {
  console.log(movies);
    return(
      <div className="mb-6">
        <h1 className=" text-white text-2xl font-semibold mb-2">{title}</h1>
        <div className="flex overflow-x-auto gap-4 scrollbar-none p-4">
          <div className="flex">
            {movies?.map((movie)=><MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
      </div>
        </div>
        </div>
    )
}

export default MovieList;