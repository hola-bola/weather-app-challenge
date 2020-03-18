import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="title-header">
        <header className="header">
          <h1 className="title">myWeather</h1>
          <p>Helping you find weather conditions in cities</p>
        </header>
      </div>
      <SearchBar />
    </div>
  );
}


export default App;
