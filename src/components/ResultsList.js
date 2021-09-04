// import NoResults from './NoResults';

function ResultsList(props) {
  const searchResults = props.data.slice(1);
  let results;

  if (searchResults.length) {

    results = searchResults.map(result => {
      return (
        <div className="output-results">
          <a href={ result[3] } target="blank">
            <h2>{ result[1] }</h2>
            <p>{ result[2] }</p>
          </a>
        </div>
      )
    })
  } else {
    results = <p>No results</p>
  }

  return (
    { results }
  )
}

export default ResultsList;
