import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import APIKEY from '../../apikey';
import './App.css';

const APIKEYS = APIKEY;

const App = () => {

  const [weather, setWeather] = useState([])

  async function fetchWeather(e){
    e.preventDefault()
      const URL = (`https://api.openweathermap.org/data/2.5/weather?q=london&APPID=${APIKEYS}`)
      let res = await axios.get(URL);
      let data  = res.data;
      setWeather(data)
  }

  return (
    <div className="App">
      <div className="title-header">
        <header className="header">
          <h1 className="title">myWeather</h1>
          <p>Helping you find weather conditions in cities</p>
        </header>
      </div>
      <SearchBar getWeather={fetchWeather}/>
      {console.log(weather)}
      </div>
  );
}


export default App;
