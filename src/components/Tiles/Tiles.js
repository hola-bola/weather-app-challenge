import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './Tiles.css'

const Tiles = ({ dailyData }) => {

    return (
    <div className="container">
        <div className="row justify-content-center">
        {dailyData && dailyData.map(data => {
                return <SearchResults 
                key={data.dt}
                maxTemp={data.main.temp_max}
                temperature={data.main.temp}
                minTemp={data.main.temp_min}/>
            })}
            {/* <SearchResults error={dailyData.error} /> */}
        </div>
    </div>
    )
}


export default Tiles;