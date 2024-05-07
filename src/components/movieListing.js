import React from 'react';
import { useSelector } from 'react-redux';

import DisplayMoviesCard from './displayMoviesCard';

const MovieList = () => {

    let { movies } = useSelector((state) => state.movie);


    const renderList = (movielist) => {

        console.log(`movielist ` + movielist);

        return (
            <section>
                <section>
                    <h3 style={{ textAlign: "center" }}> Latest Movies</h3>

                    <div className="card text-center" >


                        <div className="tab-content" id="nav-tabContent" style={{ paddingTop: "10px" }}>
                            <div className="tab-pane fade show active" id="nav-latest" role="tabpanel" aria-labelledby="nav-latest-tab" tabIndex="0">
                                <DisplayMoviesCard movielist={movielist} noOfCards={3} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )

    }

    return (

        <div className="container-lg">

            <div className="row">
                {renderList(movies)}
            </div>
        </div>

    )
}

export default MovieList;



