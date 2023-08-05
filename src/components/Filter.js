import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

/**
 * Filter component that allows users to search by movie title and rating.
 * @param {Object} props - Component props.
 * @param {function} props.searchByTitle - Function to filter movies by title.
 * @param {function} props.searchByRating - Function to filter movies by rating.
 */
function Filter(props) {
  const { searchByTitle, searchByRating } = props;
  const searchInputRef = useRef(null); // Ref for the input search input

  const handleInputSearch = () => {
    const searchText = searchInputRef.current.value;
    searchByTitle(searchText);
  };
  const handleRateSearch = (newRating) => {
    searchByRating(newRating);
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px'
      }}
    >
      <div className="input-group" style={{ maxWidth: '400px', width: '100%' }}>
        <input
          ref={searchInputRef}
          className="form-control py-2 border-right-0 border"
          type="search"
          placeholder="Search"
          id="example-search-input"
          onChange={handleInputSearch} 
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Rating
          onClick={(value, event) => {
            handleRateSearch(value);
          }}
          ratingValue={4}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo"
        />
      </div>
    </div>
  );
}

export default Filter;
