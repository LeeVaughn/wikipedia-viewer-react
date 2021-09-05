import React, { Component } from 'react';
import axios from 'axios';
import ResultsList from './ResultsList';

class ResultsContainer extends Component {

  state = {
    results: [],
    loading: true
  }

  componentDidMount() {
    this.performSearch(this.props.data);
  }

  componentDidUpdate() {
      this.performSearch(this.props.data);
  }

  performSearch(query) {
    axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&origin=*`)
    .then(response => {
      this.setState({
        results: response.data[1],
        loading: false
      })
    })
    .catch(error => {
      console.log("Error fetching data", error)
    });
  }

  render() {
    return (
      <div className="output-section">
        <div id="output">
          {
            (this.state.loading) ? <p>Loading...</p> : <ResultsList results={ this.state.results } />
          }
        </div>
      </div>
    )
  }

}

export default ResultsContainer;
