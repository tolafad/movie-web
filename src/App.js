import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
/* import CourseDetails from "./components/courseDetails";
import Login from "./components/Login";
import SaveEnquiry from "./components/SaveEnquiry";
import { Navigate } from 'react-router-dom';
import UserEnquiryList from './components/userEnquiryListing'; */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          {/* <Route path="/" element={<Courses />} />
          <Route exact path="/course/:id" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enquiry" element={<SaveEnquiry />} />
          <Route path="/redirect" element={<Navigate to="/enquiry" />} />
          <Route path="/enquiries" element={<UserEnquiryList />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;