import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import DisplayMovies from './displayMovies';
import { displayEvents } from './displayEvents';

const MovieList = () => {

    const url = "http://localhost:3004/transactions";

    let dispatch = useDispatch();

    let { movies } = useSelector((state) => state.movie);

    const [errorMessage, setErrorMessage] = useState('');
    const [selectedAnchor, setSelectedAnchor] = useState('latest');
    const [transactions, setTransactions] = useState([]);


    let getTransactions = async () => {
        try {

            let { data } = await axios.get(url)


            if (data.length === 0) {
                alert('No Transactions present.')

            }
            console.log(data);
            setTransactions(data);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.toString());
            console.error('There was an error!', error);
            alert("Server error: " + error.message)
        }
    };

    useEffect(() => {
        getTransactions();
    }, []);


    useEffect(() => {
        console.log('selectedAnchor : ' + selectedAnchor);

    });


    const renderTransaction = () => {
        if (transactions) {
            return (
                <table class="table">
                    <caption>Booking Transactions</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Price</th>
                            <th scope="col">Currency</th>
                            <th scope="col">UserId</th>
                            <th scope="col">Movie</th>

                        </tr>
                    </thead>
                    {transactions.map((transaction, index) => {
                        return (

                            <tbody>
                                <tr>
                                    <th scope="row"> {index + 1}. </th>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.price}</td>
                                    <td>{transaction.currency}</td>
                                    <td>{transaction.userId}</td>
                                    <td>{transaction.movieId}</td>
                                </tr>
                            </tbody>

                        )
                    })}
                </table>
            )
        }
    }

    const Movie = (movie) => {
        if (movie) {
            return (
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.plot}</p>
                    <a href="#" className="card-link">Book</a>
                    <a href="#" className="card-link">Details</a>
                    {movie.stars}
                    {movie.genre}
                </div>
            )
        }
    }


    let onClick = anchor => {
        setSelectedAnchor(anchor);
    }

    const renderList = (movielist) => {

        console.log(`movielist ` + movielist);

        return (
            <section>
                <section>
                    <div className="card text-center" style={{
                        backgroundImage: "url(img/1.jpg)", width: "70%", marginLeft: "200px"
                    }}>
                        <div className="card-header" style={{ backgroundImage: "url(img/6.jpg)" }}>

                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { onClick('latest') }}>Latest movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { onClick('bookings') }}>Ticket Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { onClick('upcoming') }}>Upcoming Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { onClick('events') }}>Events</a>
                                </li>
                            </ul>
                        </div>
                        {selectedAnchor === 'latest' && <DisplayMovies movielist={movielist} />}
                        {selectedAnchor === 'bookings' && renderTransaction()}
                        {selectedAnchor === 'upcoming' && displayUpcomingMovies(movielist)}
                        {selectedAnchor === 'events' && displayEvents()}

                    </div>
                </section>
            </section>
        )

    }


    return (

        <div className="container">

            <div className="row">
                {renderList(movies)}
            </div>
        </div>

    )
}

export default MovieList;


const shuffle = (array) => {
    var i, j, temp;

    const clonedArray = [...array];
    for (i = clonedArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        temp = clonedArray[i];
        clonedArray[i] = clonedArray[j];
        clonedArray[j] = temp;
    }
    return clonedArray;
};

export function displayUpcomingMovies(movielist) {
    if (movielist) {
        const shuffledMovies = shuffle(movielist);

        console.log(shuffledMovies);

        return <DisplayMovies movielist={shuffledMovies} />;
    }
}