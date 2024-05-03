import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { saveTransaction } from '../redux/movie.slice';
import * as bootstrap from 'bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function DisplayMovies({ movielist }) {
    const url = "http://localhost:3004/transactions";

    let dispatch = useDispatch();
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedMovie, setSelectedMovie] = useState();

    let { transaction } = useSelector((state) => state.movie);
    const onOptionChange = e => {
        setSelectedPrice(e.target.value)
    }


    let updateTransaction = async (movie) => {
        let myMovie = movie;
        setSelectedMovie(myMovie)
        try {
            let _newTransaction = {
                movieId: myMovie.id,
                price: selectedPrice,
                currency: myMovie.currency,
                userId: uuidv4()
            };
            console.log('_newTransaction :', _newTransaction);


            let { data } = await axios.post(url, _newTransaction)
            var bookingModal = new bootstrap.Modal("#exampleModalToggle")


            if (data) {
                dispatch(saveTransaction(data))
                //alert('Final Ticket. Thank you ticket booked')
                bookingModal.show();
            }

            if (data.length === 0) {
                alert('Transaction could not be saved.')

            }
            console.log(data);
        } catch (error) {
            console.log(error);

            console.error('There was an error!', error);
            alert("Server error: " + error.message)
        }
    };


    if (movielist) {
        return <div>
            {movielist.map((movie) => (
                <div className="card mb-3" key={movie.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`./img/${movie.image}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="d-inline-flex gap-1">
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href={`#multiCollapseExample1_${movie.id}`} role="button" aria-expanded="false" aria-controls={`multiCollapseExample1_${movie.id}`}>Details</a>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#multiCollapseExample2_${movie.id}`} aria-expanded="false" aria-controls={`multiCollapseExample2_${movie.id}`}>Book Ticket</button>

                                </p>
                                <div className="row">
                                    <div>
                                        <div className="collapse multi-collapse" id={`multiCollapseExample1_${movie.id}`}>
                                            <div className="card card-body">
                                                <p className="card-text"><b>Plot : </b>{movie.plot}</p>
                                                <p className="card-text"><small className="text-body-secondary"><b>Genre : </b>{movie.genre}</small></p>
                                                <p className="card-text"><small className="text-body-secondary"><b>Stars : </b>{movie.stars}</small></p>
                                                <p className="card-text"><small className="text-body-secondary"><b>Director : </b>{movie.director}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id={`multiCollapseExample2_${movie.id}`}>
                                            <div className="card card-body">
                                                <div className="rounded-pill border-1" style={{ border: "var(--bs-card-border-width) solid var(--bs-card-border-color)", textAlign: "center" }}>
                                                    <h6>Prices</h6>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={movie.prices.normal} checked={selectedPrice === "200"}
                                                            onChange={onOptionChange} />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">normal - {movie.currency} {movie.prices.normal}</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={movie.prices.superior} checked={selectedPrice === "300"}
                                                            onChange={onOptionChange} />
                                                        <label className="form-check-label" htmlFor="inlineRadio2">superior - {movie.currency} {movie.prices.superior}</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={movie.prices.sofa} checked={selectedPrice === "600"}
                                                            onChange={onOptionChange} />
                                                        <label className="form-check-label" htmlFor="inlineRadio3">sofa - {movie.currency} {movie.prices.sofa}</label>
                                                    </div>
                                                    <button className="btn btn-info btn-sm" size="sm" onClick={() => { updateTransaction(movie); }}>Confirm Booking</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Final Ticket</h1> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Final Ticket</div>
                                    <div className="card-body">
                                        {!isNullOrUndefined(selectedMovie) && <h5 className="card-title">Title: {selectedMovie.title}</h5>}
                                        {!isNullOrUndefined(transaction) &&
                                            <div>
                                                <p className="card-text">Id:  {transaction.id}</p>
                                                <p className="card-text">Price: {transaction.currency} {transaction.price}</p>
                                                <p className="card-text">UserId:  {transaction.userId}</p>
                                            </div>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >;
    }
}
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}