import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-header">
        <header>
          <img src="https://regularlyscheduledprogrammingblog.files.wordpress.com/2018/01/wikipedia-logo2.png" alt="Wikipedia logo" />
        </header>

        <form className="search-bar">
          <button type="submit" id="search">
              <i className="fa fa-search"></i>
          </button>
          <input type="search" className="search-input" id="searchTerm" placeholder="Search Wikipedia"/>
        </form>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
