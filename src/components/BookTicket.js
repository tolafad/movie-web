import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveTransaction } from '../redux/movie.slice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import Header from './Header';


const BookTicket = () => {
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({});

    let { movie } = useSelector((state) => state.movie);

    console.log('movie :', movie);


    let dispatch = useDispatch();

    let verifyTransaction = () => {
        let myMovie = movie;

        let _newTransaction = {
            movieId: myMovie.id,
            currency: myMovie.currency,
            duration: "150mins",
            releaseDate: "1st May 2024",

            userId: uuidv4()
        };
        console.log('_newTransaction :', _newTransaction);
        setTransaction(_newTransaction);

        dispatch(saveTransaction(_newTransaction))
        navigate('/ticket', { transaction: _newTransaction });
    }

    if (movie) {

        return <div style={{
            marginLeft: "100px",
            marginRight: "100px"
        }}>
            <Header />
            <div className="container-fluid">
                <div className="expand multi-expand" id={`multiCollapseExample2_${movie.id}`} style={{ alignContent: "center", /* paddingLeft: "240px", paddingRight: "240px"  */ }}>
                    <div className="card card-body" >
                        <div className="container-fluid text-center" >
                            <div className="row" >
                                <div className="col-xxl-3">
                                    <img src={`./img/${movie.image}`} className="img-fluid rounded-start" alt="..." />

                                </div>
                                <div className="col-xxl-9 text-center fw-bolder" >
                                    <div className="row h-100 display-flex"  >
                                        <div className="col-8 col-xxl-12" >
                                            <div className="row" >
                                                <div className="col-8 col-sm-8" >
                                                    {movie.title}
                                                </div>
                                                <div className="col-2 col-sm-4 border-start">
                                                    1st May 2024
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-2 col-xxl-12 text-center">
                                            150mins
                                        </div>
                                        <div className="col-2 col-xxl-12" >
                                            <img src={`./img/12a.webp`} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <button className="btn btn-primary" onClick={() => { verifyTransaction(); }}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}

export default BookTicket;