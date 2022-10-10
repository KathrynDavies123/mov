import "./App.css";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import FooterBar from "./components/footerBar/FooterBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovie = async(e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
}

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar query={query} setQuery={setQuery} searchMovie={searchMovie}/>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies}/>}/>
        <Route path={"/:id"} element={<Single/>}/>
      </Routes>
      <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
