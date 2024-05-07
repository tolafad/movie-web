import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/home";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovies } from './redux/movie.slice';
import BookTicket from "./components/BookTicket";
import Ticket from './components/Ticket';
import BookingPage from './components/BookingPage';
import UpMovies from './components/UpComingMovies'
import DisplayEvents from "./components/displayEvents";

const url = "http://localhost:3004/movies"

function App() {

  let dispatch = useDispatch();

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(saveMovies(result)))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Movies />} />
          <Route path="/upcoming" element={<UpMovies />} />

          <Route path="/book" element={<BookTicket />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/events" element={<DisplayEvents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;