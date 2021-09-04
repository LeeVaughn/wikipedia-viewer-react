import React, { Component } from 'react';

class SearchForm extends Component {
  
  handleSubmit = (e) => {
    const { history} = this.props;
    e.preventDefault();
    history.push(`/search/${this.query.value}`);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-bar" onSubmit={ this.handleSubmit }>
        <button type="submit" id="search">
            <i className="fa fa-search"></i>
        </button>
        <input type="search" name="search" ref={(input) => this.query = input} className="search-input" id="searchTerm" placeholder="Search Wikipedia"/>
      </form>
    )
  }

}

export default SearchForm;