import Button from 'react-bootstrap/Button';
import Filter from "./components/Filter"
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { useState,useRef } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Description from './components/Description';

function App() {
// Initial movie data
  const movies = [
    {
      title: "Shutter Island",
      description: "A U.S. Marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
      posterURL: "https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg" ,
      trailerLink:"https://www.youtube.com/embed/5iaYLCiq5RM?si=_8-vFQxFF0bf52XK",
      rating: 5
    },
    {
      title: "Me, Myself & Irene",
      description: "A nice-guy cop with dissociative identity disorder must protect a woman on the run from a corrupt ex-boyfriend and his associates.",
      posterURL: "https://m.media-amazon.com/images/I/51F7dYuf5gL._AC_UF894,1000_QL80_.jpg", 
      trailerLink:"https://www.youtube.com/embed/JABG7viqJWc?si=55QDYkDRh9kyB_Xf" ,
      rating: 4
    },
    {
      title: "Interstellar",
      description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/I/712I5GOGprL._AC_UF894,1000_QL80_.jpg",
      trailerLink:"https://www.youtube.com/embed/zSWdZVtXT7E?si=oxr8J7cMyWkVpYOh" ,
      rating: 5
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      posterURL: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      trailerLink:"https://www.youtube.com/embed/EXeTwQWrcwY?si=9x3vjldbazjtyH1E",
      rating: 5
    },
    {
      title: "Harry Potter",
      description: "A young wizard's adventures during his years at Hogwarts School of Witchcraft and Wizardry.",
      posterURL: "https://m.media-amazon.com/images/I/51rVowBOMeL._AC_UF894,1000_QL80_.jpg",
      trailerLink:"https://www.youtube.com/embed/17ywQS6XO-M?si=Fu-hwlP43HUb_Jps" ,
      rating: 4
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://m.media-amazon.com/images/I/512G9J05RJL._AC_UF1000,1000_QL80_.jpg",
      trailerLink:"https://www.youtube.com/embed/NmzuHjWmXOc?si=AcMVOThMznoB41Hd" ,
      rating: 5
    },

    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      trailerLink:"https://www.youtube.com/embed/YoHD9XEInc0?si=qa-4C0f0V-B-azM2" ,
      rating: 5
    }
  ];
    // State to hold the current list of movies
    const [moviesState, setMoviesState] = useState(movies);
 

  // Function to filter movies by title
  const searchByTitleHandler = (searchText) => {
   
    if (searchText && searchText.trim() !== '') {
        setMoviesState(movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText.toLowerCase())
        ));
    } else {
        setMoviesState(movies); // Restore the original movies when search text is empty
    }
};
   // Function to filter movies by rating
  const searchByRatingHandler = (rating) => {
   
   
      setMoviesState(movies.filter(movie =>
        movie.rating ===rating
      ));
   
  };
  const submitHandler = (movieToAdd) => {
    setMoviesState(prevMovies => [...prevMovies, movieToAdd]);
  };
  return (
    <div className="container">
      <div className="app-header">
        <h1>Movie App</h1>
      </div>
      <Routes>
        <Route path = '/' element = {
           <div className="app-content">
           <div className="filter-container">
             <Filter searchByTitle={searchByTitleHandler} searchByRating={searchByRatingHandler}/>
           </div>
           <div className="movie-list">
             <MovieList movieList={moviesState} />
           </div>
           <div className="add-movie-container">
             <AddMovie onSubmit={submitHandler}/>
           </div>
         </div>
        }></Route>
     
    { /*show description based on the id clicked by the user */}
      <Route path="/:id" element ={<Description movies={moviesState}/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
