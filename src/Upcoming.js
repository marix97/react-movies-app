import React, {useState, useEffect} from 'react';

function Upcoming(){
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        retrieveUpcomingMovies();
        document.title = "Upcoming movies";
    }, []);

    const retrieveUpcomingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${window.apiKey}&language=en-US&page=1`);
        const data = await response.json();
        setUpcomingMovies(data.results);
        console.log(data.results);
    };

    return(
        <div className="App">
        <div className="container">
            {upcomingMovies.map(movie => {
                return <div className="box">
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt=''></img>
                    <p>Rated: {movie.vote_average}</p>
                    <div className="movie-title">{movie.title}</div>
                    <p>Overview:</p>
                    <div className="movie-overview">{movie.overview}</div>
                </div>
            })}
        </div>
        </div>
    )
}

export default Upcoming;