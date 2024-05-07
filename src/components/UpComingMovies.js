import UpMovieList from './UpMovieList';
import React from 'react';
import Header from './Header';


const UpMovies = () => {

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
                            <UpMovieList />
                        </div>
                    </section>
                </section>
            </main>

        </div >
    )
}

export default UpMovies;