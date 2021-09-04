// import NoResults from './NoResults';

function ResultsList(props) {
  const searchResults = props.results;
  let results;

  if (searchResults.length) {
    results = searchResults.map(result => {
      return (
        <div className="output-results">
          <a href={ `https://en.wikipedia.org/wiki/${ result }` } target="blank">
            <h2>{ result }</h2>
          </a>
        </div>
      )
    });
  } else {
    results = <p>No results</p>
  }

  return (
    results
  )
}

export default ResultsList;
