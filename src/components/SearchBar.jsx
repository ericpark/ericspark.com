import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar'

const SearchBarCustom = ({ searchTerm }) => (
  <SearchBar
    onChange={() => console.log('onChange')}
    onRequestSearch={() => console.log('onRequestSearch')}
    style={{
      margin: '0 auto',
      maxWidth: 800
    }}
  />
);

export default SearchBarCustom;

SearchBarCustom.propTypes = {
  searchTerm: PropTyes.string
};