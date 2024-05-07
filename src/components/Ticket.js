import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveTransaction } from '../redux/movie.slice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Ticket = () => {
    const navigate = useNavigate();

    const url = "http://localhost:3004/transactions";

    let { movie } = useSelector((state) => state.movie);
    let { transaction } = useSelector((state) => state.movie);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedSeatNo, setSelectedSeatNo] = useState();

    const [date, setDate] = useState();
    const weekend = (date) => new Date() < date;

    let dispatch = useDispatch();

    let updateTransaction = async () => {
        let myTransaction = transaction;

        try {

            let _newTransaction = {
                ...myTransaction,
                moveTime: date,
                noOfSeats: selectedSeatNo,
                price: selectedPrice
            }

            let { data } = await axios.post(url, _newTransaction)

            if (data) {
                dispatch(saveTransaction(data))
                //alert('Final Ticket. Thank you ticket booked')
                navigate('/booking-page');
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

        return false;
    };



    const onOptionChange = e => {
        setSelectedPrice(e.target.value)
    }

    const onSelectChange = e => {
        setSelectedSeatNo(e.target.value);
    }

    if (movie) {

        return <div style={{
            marginLeft: "100px",
            marginRight: "100px"
        }}>
            <Header />

            <div className="expand multi-expand" id={`multiCollapseExample2_${movie.id}`} /* style={{ alignContent: "center", paddingLeft: "140px", paddingRight: "140px" }} */>
                <div className="container-fluid" >
                    <div className="card card-body position-relative">
                        <form className="was-validated">
                            <div className="row mb-3 ">

                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Available Show Timings</label>
                                <div className="col-sm-6  position-relative">
                                    <div className="form-check form-check-inline" >
                                        <DatePicker
                                            showTimeSelect
                                            timeIntervals={150}
                                            filterDate={weekend}
                                            minTime={new Date(0, 0, 0, 12, 30)}
                                            maxTime={new Date(0, 0, 0, 19, 0)}
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            dateFormat="MMMM d, yyyy h:mmaa"
                                        />
                                    </div>
                                    <div class="invalid-feedback">
                                        Select suitable time.
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">No of Seats</label>
                                <div className="col-sm-6 position-relative">
                                    <div className="form-check form-check-inline">

                                        <select className="form-select" id="specificSizeSelect" onChange={onSelectChange} defaultValue="Choose..." required>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>

                                        </select>
                                        <div class="invalid-feedback">
                                            Choose the Number of Seats.
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2">Prices</legend>
                                <div className="col-sm-9  position-relative">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={movie.prices.normal} checked={selectedPrice === "200"}
                                            onChange={onOptionChange} required />
                                        <label className="form-check-label" htmlFor="inlineRadio1">normal - {movie.currency} {movie.prices.normal}</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={movie.prices.superior} checked={selectedPrice === "300"}
                                            onChange={onOptionChange} required />
                                        <label className="form-check-label" htmlFor="inlineRadio2">superior - {movie.currency} {movie.prices.superior}</label>

                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={movie.prices.sofa} checked={selectedPrice === "600"}
                                            onChange={onOptionChange} required />
                                        <label className="form-check-label" htmlFor="inlineRadio3">sofa - {movie.currency} {movie.prices.sofa}</label>
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide a valid price.
                                    </div>
                                </div>

                            </fieldset>
                            <button type="button" className="btn btn-primary" onClick={() => { updateTransaction(); }}>Book</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Ticket;