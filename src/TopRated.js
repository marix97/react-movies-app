import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import './App.css';

function TopRated(){
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [movieReviews, setReviews] = useState([]);
    const [modalIsOpen, setModalOpen] = useState(false);
    const [currentMovieForReview, setMovieForReview] = useState("");

    useEffect(() => {
        retrieveTopRatedMovies();
        document.title = "Top Rated";
    }, []);

    const retrieveTopRatedMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${window.apiKey}&language=en-US&page=1`);
        const data = await response.json();
        setTopRatedMovies(data.results);
    };

    const getReviewsForAMovie = async (id, title) =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${window.apiKey}&language=en-US&page=1`);
        const data = await response.json();
        setReviews(data.results);
        setModalOpen(true);
        setMovieForReview(title);
    }

    return(
        <div className="App">
        <div className="container">
            {topRatedMovies.map(movie => {
                return <div className="box">
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt=''></img>
                    <p>Rated: {movie.vote_average}</p>
                    <div className="movie-title">{movie.title}</div>
                    <p>Overview:</p>
                    <div className="movie-overview">{movie.overview}</div>
                    <button onClick={() => getReviewsForAMovie(movie.id, movie.title)}>See reviews</button>
                </div>
            })}
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)}>
            <div>
            <div className="movie-for-review">{currentMovieForReview}</div>
                {movieReviews.map(review => {
                    return <div>
                    <div className="review-nickname">Nickname: {review.author}</div>
                    <div className="review-opinion">Opinion: {review.content}</div>
                    </div>
                })}
                <button style={{width: 100 + "px"}} onClick={() => setModalOpen(false)}>Close</button>
            </div>
        </Modal>
        </div>
        </div>
    );
};

export default TopRated;