import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ResultsGrid from './ResultsGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="titleName">Documentary Search</p>
        </div>
        <SearchBar/>
        <ResultsGrid/>
      </div>
    );
  }
}

export default App;