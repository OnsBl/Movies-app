import React from 'react';
import MovieCard from './MovieCard';
import { NavLink } from 'react-router-dom';
import Description from './Description';
/**
 * Component for displaying a list of movies.
 * @param {Object} props - Component props.
 * @param {Array} props.movieList - List of movies to be displayed.
 */

function MovieList(props) {
  const movieList = props.movieList.map((movie, index) =>
      <div key={index} style={{ marginBottom: '20px' }}>
        <MovieCard index={index} movie={movie} />
      </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', flexWrap: 'wrap' }}>
      {movieList}
    </div>
  );
}

export default MovieList;