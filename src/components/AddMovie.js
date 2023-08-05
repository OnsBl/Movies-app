import React ,{useRef}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddMovie.css'; 

/**
 * Component for adding a new movie.
 * @param {Object} props - Component props.
 * @param {function} props.onSubmit - Function to handle movie submission.
 */
function AddMovie(props) {

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const urlRef = useRef(null);
    const rateRef = useRef(null);
  
    const addMovie = (event) => {
      event.preventDefault();
  
      const newMovie = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        posterUrl: urlRef.current.value,
        rating: parseInt(rateRef.current.value),
    
      };
      props.onSubmit(newMovie)
    }
  return (
    <div className="add-movie-container">
      <h2 className="add-movie-title">Add a New Movie</h2>
      <Form onSubmit={addMovie}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label className="form-label">Title</Form.Label>
          <Form.Control  ref ={titleRef} type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label className="form-label">Description</Form.Label>
          <Form.Control ref ={descriptionRef} as="textarea" rows={4} placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPosterURL">
          <Form.Label className="form-label">Poster URL</Form.Label>
          <Form.Control ref ={urlRef} type="url" placeholder="Enter poster URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRating">
          <Form.Label className="form-label">Rating</Form.Label>
          <Form.Control ref ={rateRef} type="number" min="1" max="5" placeholder="Enter rating" />
        </Form.Group>

        <Button className="add-movie-button" variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
}

export default AddMovie;
