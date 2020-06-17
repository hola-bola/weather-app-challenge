import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import APIKEY from '../../apikey';
import TileContainer from '../TileContainer/TileContainer';
import './App.css';

const APIKEYS = APIKEY;

const App = () => {

  const [weather, setWeather] = useState([])
  
  async function fetchWeather(e){
    const city = e.target.elements.city.value
    e.preventDefault()
      const URL = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APIKEYS}`)
      try {
        let res = await axios.get(URL);
        let data  = res.data;
        let dailyData = data.list.filter((reading) => {   
          return reading.dt_txt.includes("12:00:00")});
       setWeather(dailyData)
      } catch (e) {
        setWeather({
          error:'Please Enter a Correct City'
        })
      }
      
  }

  return (
    <div className="App">
      <div className="title-header">
        <header className="header">
          <h1 className="title">myWeather App</h1>
          <p className="subtitle">5-day Weather Forecast</p>
          <p className="slug">Helping you find weather conditions Globally</p>
        </header>
      </div>
      <SearchBar getWeather={fetchWeather}/>
      <TileContainer dailyData={weather} error={weather.error} cityName={fetchWeather}/>
      
      </div>
  );
}


export default App;
