import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import APIKEY from '../../apikey';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const APIKEYS = APIKEY;

const App = () => {

  const [weather, setWeather] = useState([])

  async function fetchWeather(e){
    const city = e.target.elements.city.value
    e.preventDefault()
      const URL = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APIKEYS}`)
      let res = await axios.get(URL);
      let data  = res.data;
      setWeather({
        data: data,
        city: data.city.name,
        description: data.list[1].weather.description,
        temperature: data.list[0].main.temp,
        minTemp: data.list[0].main.temp_min,
        maxTemp: data.list[0].main.temp_max,
        error:""
      })
      
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
      <SearchResults 
        city={weather.city}
        description={weather.description}
        maxTemp={weather.maxTemp}
        temperature={weather.temperature}
        minTemp={weather.minTemp}
        error={weather.error} />
      {console.log(weather)}
      </div>
  );
}


export default App;
