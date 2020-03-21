import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

const Tiles = ({ dailyData, overallData}) => {

    return (
    <div className="Tiles">
       {dailyData && dailyData.map(data => {
            return <SearchResults 
            key={data.dt}
            maxTemp={data.main.temp_max}
            temperature={data.main.temp}
            minTemp={data.main.temp_min}/>
        })}
        {/* <SearchResults error={dailyData.error} /> */}
    </div>
    )
}


export default Tiles;