
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CourseDetails from "./pages/CourseDetails";
import CourseReviews from "./pages/Coursereview";
import CreatorProfile from "./pages/CreatorProfile";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course-reviews" element={<CourseReviews />} />
        <Route path="/creator-profile" element={<CreatorProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;