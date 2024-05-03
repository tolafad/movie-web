import React from 'react';

export function displayEvents() {

    return <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="img/2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                    <h5>Half Price Ticket!!!</h5>
                    <p>Both Bank Holidays In the the Month of May. All children get <b>50%</b> off all Ticket Category in the month of May</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="img/5.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                    <h5>EXtended Hours</h5>
                    <p>All through summer closing, last movie viewing has been expanded to midnight, Mon - Sat.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="img/3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                    <h5>Please checkout Upcoming Movies</h5>
                    <p>Very Exciting Movies coming out. Check them out now</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>;
}
