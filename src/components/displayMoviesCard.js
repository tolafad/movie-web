import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { saveMovie } from '../redux/movie.slice';

export default function DisplayMoviesCard({ movielist, noOfCards }) {

    const navigate = useNavigate();
    let dispatch = useDispatch();

    let updateMovie = ({ movie }) => {
        let myMovie = movie;

        dispatch(saveMovie(myMovie));
        navigate('/book', { state: { movie: myMovie } });

    }


    if (movielist) {
        let noOfCards_l = movielist.length;
        if (!isNullOrUndefined(noOfCards) && Number.isInteger(noOfCards)) {
            noOfCards_l = parseInt(noOfCards, 10);
        }

        console.log("movielist.slice(0, noOfCards) length :" + movielist.slice(0, noOfCards_l).length);

        return <div style={{ alignContent: "center", paddingLeft: "140px", paddingRight: "140px" }}>
            <div className={`row  gx-5 row-cols-1 row-cols-md-${noOfCards_l} g-${noOfCards_l}`}>
                {movielist.slice(0, noOfCards_l).map((movie) => (
                    <div className="col border border-light" key={movie.id}>
                        <div className="card h-100" style={{ textAlign: "center !important" }}>
                            <img src={`./img/${movie.image}`} className="img-fluid rounded-start" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.plot}</p>
                                <p className="card-text"><small className="text-body-secondary">{movie.genre}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><b>Stars : </b>{movie.stars}</small></p>
                                <p className="card-text"><small className="text-body-secondary"><b>Director : </b>{movie.director}</small></p>
                            </div>
                            <div className="card-footer d-grid">
                                <a className="btn btn-primary" onClick={() => { updateMovie({ movie }) }}>Book Ticket</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    }

}


export function isNullOrUndefined(value) {
    return value === undefined || value === null;
}