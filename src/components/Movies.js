import React from 'react';
import MovieList from './movieListing';;
import Header from './Header';

const Movies = () => {

    return (

        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingBottom: "100px",

        }}>
            <main>
                <section>
                    <section>
                        <div className='container'>
                            <Header />
                            <center>
                                <h2 style={{ color: 'white' }} >Movies Page</h2>
                            </center>
                            <MovieList />
                        </div>
                    </section>
                </section>
            </main>

        </div >
    )
}

export default Movies;