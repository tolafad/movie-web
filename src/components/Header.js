import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {

    let { movies } = useSelector((state) => state.movie);

    const [query, setQuery] = useState("");

    const search_parameters = Object.keys(Object.assign({}, ...movies));

    //How To Use Function => search(data)

    function search(data) {

        return data.filter((data) =>

            search_parameters.some((parameter) =>

                data[parameter].toString().toLowerCase().includes(query)

            )

        );

    }

    return <>
        <div className="d-flex p-2 justify-content-end">

            <form>
                <input className="form-control me-2" style={{ alignContent: "right" }} type="search" placeholder="Search Movie" aria-label="Search" name="search-form" id="search-form" />
            </form>
        </div>

        <nav className="nav nav-tabs nav-justified">
            < a className="navbar-brand" href="/">E-Cube</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="nav-link" href="/latest">Latest movies</a>
            <a className="nav-link" href="/upcoming">Upcoming Movies</a>
            <a className="nav-link" href="/events">Nearby Events</a>
        </nav >
    </>
}

export default Header;