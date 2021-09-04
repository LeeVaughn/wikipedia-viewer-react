import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SurpriseMe from './components/SurpriseMe';
import ResultsContainer from './components/ResultsContainer';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route component={ SearchForm } />

          <Switch>
            <Route exact path="/" render={ () => <SurpriseMe /> } />
            <Route path="/search/:category" render={ ({ match }) => <ResultsContainer data={ match.params.category } title={ match.params.category } /> } />
            <Route component={ NotFound } />
          </Switch>
    
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
