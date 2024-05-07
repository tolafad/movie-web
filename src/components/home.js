import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

import DisplayMoviesCard from './displayMoviesCard';

const Home = () => {

    let { movies } = useSelector((state) => state.movie);

    const renderList = (movielist) => {

        console.log(`movielist ` + movielist);

        return (
            <section>
                <section>
                    <Header />
                    <div>

                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="img/6.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                                        <h5>Hurray Book Your Tickets Now!!!</h5>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="img/4.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                                        <h5>Hurray Book Your Tickets Now!!!</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/1.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "black" }}>
                                        <h5>Hurray Book Your Tickets Now!!!</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="tab-content" id="nav-tabContent" style={{ paddingTop: "10px" }}>
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                <h3 style={{ textAlign: "center" }}> Recommended Movies</h3>
                                <DisplayMoviesCard movielist={movielist} noOfCards={4} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )

    }

    return (

        <div className="container-fluid">

            <div className="row">
                {renderList(movies)}
            </div>
        </div>

    )
}

export default Home;


export const shuffle = (array) => {
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
