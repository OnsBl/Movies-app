import React from 'react';
import { useParams, Link } from 'react-router-dom';

const descriptionStyle = {
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

function Description(props) {
  // Get the 'id' parameter from the URL
  const { id } = useParams();
  
  // Convert the 'id' parameter to an integer
  const movieIndex = parseInt(id);

  // Get the movie at the specified index from the 'props.movies' array
  const movie = props.movies[movieIndex];

  // Handle the case when the movie is not found
  if (!movie) {
    return <div style={descriptionStyle}>Movie not found</div>;
  }

  // Render the description section with the movie's title, description, and trailer
  return (
    <div style={descriptionStyle}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>{movie.title}</div>
      
      <div>{movie.description}</div>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br/>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Description;
