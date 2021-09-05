import NoResults from './NoResults';

function ResultsList(props) {
  const searchResults = props.results;
  let results;

  if (searchResults.length) {
    results = searchResults.map(result => {
      return (
        <div className="output-results">
          <a href={ `https://en.wikipedia.org/wiki/${ result }` } target="_blank" rel="noreferrer">
            <h2>{ result }</h2>
          </a>
        </div>
      )
    });
  } else {
    results = <NoResults/>
  }

  return (
    results
  )
}

export default ResultsList;
