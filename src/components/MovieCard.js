import React from 'react';
import Card from 'react-bootstrap/Card';
/**
 * Movie card component that displays details about a movie.
 * @param {Object} props - Component props.
 * @param {Object} props.movie - Movie object containing title, description, posterURL, and rating.
 */

function MovieCard(props) {
  const { movie } = props;

  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} style={{ height: '60%' }} />
      <Card.Body style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text style={{ marginBottom: '0' }}>{movie.description}</Card.Text>
        </div>
        <div>
          <Card.Text>Rating: {movie.rating}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;