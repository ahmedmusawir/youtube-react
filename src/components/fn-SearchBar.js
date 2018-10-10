import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { searchText } = props;
  return (
    <div className="mt-5">
      <input type="text" placeholder="Search Video" className="form-control" />
    </div>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
