import './App.css';
import api from '../src/api/axiosconfig';
import {useState, useEffect} from 'react';
import Layout from '../src/Components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/Components/home/Home';
import Header from '../src/Components/header/Header';
import Trailer from '../src/Components/trailer/Trailer';
import Reviews from '../src/Components/reviews/Reviews';
import NotFound from './Components/notfound/NotFound';
 import Login from "../src/Components/login/LoginForm";

 import Signup from "../src/Components/signup/Signup";


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>
      

    </div>
  );
}

export default App;