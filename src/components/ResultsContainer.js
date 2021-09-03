import React, { Component } from 'react';
import axios from 'axios';

class ResultsContainer extends Component {

  state = {
    results: [],
    loading: true
  }

  componentDidMount() {
    this.performSearch("pizza");
  }

  performSearch(query) {
    axios.get(`http://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&origin=*&format=json&callback=?`)
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className="output-section">
        <div id="output">
          results
        </div>
      </div>
    )
  }

}

export default ResultsContainer;