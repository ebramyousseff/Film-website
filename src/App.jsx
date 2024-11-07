import MoviesList from "./MoviesList";
import NavBar from "./NavBar";
import CardMovies from "./CardMovies";
import { Container } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MoviesDetails from "./MovieDetails";






function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount , setPageCount] = useState(0)




  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  };
  useEffect(() => {
    getAllMovies();
  }, []);




  // get current page
  const getPage = async (currentPage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${CurrentPage}`
    );
    setMovies(res.data.results);

  };

  


  // to search in Api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages)

    }
  };





  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path="/movie/:id" element={<MoviesDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
