import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form className="search-bar">
        <button type="submit" id="search">
            <i className="fa fa-search"></i>
        </button>
        <input type="search" className="search-input" id="searchTerm" placeholder="Search Wikipedia"/>
      </form>
    )
  }

}

export default SearchForm;