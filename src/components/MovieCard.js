import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Description from './Description';
/**
 * Movie card component that displays details about a movie.
 * @param {Object} props - Component props.
 * @param {Object} props.movie - Movie object containing title, description, posterURL, and rating.
 */

function MovieCard(props) {
  const {index, movie } = props;

  return (
    <NavLink to ={index.toString()}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} style={{ height: '70%' }} />
        <Card.Body >
          <div>
            <Card.Title>{movie.title}</Card.Title>
          </div>
          <div>
            <Card.Text>Rating: {movie.rating}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

export default MovieCard;