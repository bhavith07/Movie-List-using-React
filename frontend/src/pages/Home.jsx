import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuerry] = useState("");
    const movies = [
        { id: 1, title: "Puss in the Boots", release_date: "2020" },
        { id: 2, title: "Spiderman ", release_date: "2000" },
        { id: 3, title: "The Matrix", release_date: "1999" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuerry("")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuerry(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    );
}
export default Home;