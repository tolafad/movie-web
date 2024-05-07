import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { isNullOrUndefined } from './displayMoviesCard';
import QRCode from 'react-qr-code';

const BookingPage = () => {

    const url = "http://localhost:3004/transactions";

    let { transaction } = useSelector((state) => state.movie);
    let { movie } = useSelector((state) => state.movie);

    console.log('movie :', movie);

    if (movie) {

        return <div style={{
            marginLeft: "100px",
            marginRight: "100px"
        }}>
            <Header />
            <div className="container-fluid">
                <div className="expand multi-expand" id={`multiCollapseExample2_${transaction.id}`} style={{ alignContent: "center", /* paddingLeft: "240px", paddingRight: "240px"  */ }}>
                    <div class="card mb-3" style={{ maxWidth: "940px", paddingTop: "50px" }}>
                        <div className="card-header">Final Ticket</div>
                        <div class="row g-0">
                            <div class="col-md-4">
                                {(
                                    <div className="qrcode__download">
                                        <div className="qrcode__image">
                                            <QRCode value={url} size={300} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    {!isNullOrUndefined({ movie }) && <h5 className="card-title">Title: {movie.title}</h5>}
                                    {!isNullOrUndefined(transaction) &&
                                        <div>
                                            <p className="card-text">Id:  {transaction.id}</p>
                                            <p className="card-text">Price: {transaction.currency} {transaction.price}</p>
                                            <p className="card-text">UserId:  {transaction.userId}</p>
                                            <p className="card-text">Date & Time:  {transaction.moveTime}</p>

                                        </div>

                                    }

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BookingPage;