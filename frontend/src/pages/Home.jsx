import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1,title: "Puss in the Boots", release_date:"2020"},
         {id: 1,title: "Spiderman ", release_date:"2000"},
          {id: 1,title: "The Matrix", release_date:"1999"},
    ];
    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie)  =>  (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
            </div>
        </div>
    );
}
export default Home;