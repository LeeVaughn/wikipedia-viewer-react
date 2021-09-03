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
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
            <Route component={SearchForm} />
            <SurpriseMe />
    

        </BrowserRouter>
      </div>
    );
  }

}

export default App;
