import React, {useEffect} from 'react';
import './App.css';
import './Home.css';

function Home(){
    useEffect(() =>{
        document.title = "Home";
    }, []);

    return(
        <div className="Home">
        <div className="home-box">Welcome to our website. Here you will be able to check
            the most popular movies for the day, upcoming movies in theaters and
            the top rated movies for the day.
        </div>
        </div>
    );
}

export default Home;