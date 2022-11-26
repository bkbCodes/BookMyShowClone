import './App.css';
import axios from 'axios';

// Routing
import { Navigate, Route, Routes } from 'react-router-dom';

// React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Play.Page";
import PageNotFound from './pages/PageNotFound.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/plays' element={<Plays />} />
      <Route path='/404' element={<PageNotFound />} />
      <Route path="*" element={ <Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
