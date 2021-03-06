import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class SearchBar extends Component {
  // static propTypes = {
  //   searchText: PropTypes.string.isRequired,
  // };

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (term) => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    // console.log(this.state);
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <input
          type="text"
          onChange={(e) => this.onInputChange(e.target.value)}
          placeholder="Search Video"
          className="form-control search-bar"
          value={this.state.term}
        />
        {/* Value of the input: {this.state.term} */}
      </div>
    );
  }
}

export default SearchBar;
