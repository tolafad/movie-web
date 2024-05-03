import React from 'react';
import MovieList from './movieListing';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovies } from '../redux/movie.slice';


const url = "http://localhost:3004/movies"

const Movies = () => {
    let dispatch = useDispatch();

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => dispatch(saveMovies(result)))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (

        <div style={{
            backgroundImage: "url(img/1.jpg)",
            /* Full height */
            width: "100vw",
            height: "100vh",
            /* Center and scale the image nicely */
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

        }}>
            <main>
                <section>
                    <center>
                        <h2 style={{ color: 'white' }} >Movies Page</h2>
                    </center>
                    <MovieList />
                </section>
            </main>

        </div >
    )
}

export default Movies;