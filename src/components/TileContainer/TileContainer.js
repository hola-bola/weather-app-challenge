import React from 'react';
import Tile from '../Tile/Tile';
import './TileContainer.css'

const TileContainer = ({ dailyData, error, cityInfo}) => {
    let newDate = new Date();

    return (
    <div className="container">
        {error && <p className="error">{error}</p>}
        {cityInfo && <p className="city">{cityInfo}</p>}
        <div className="row justify-content-center">
        {!error && dailyData.map(data => {
                return <Tile 
                day={newDate.setTime(data.dt *1000)}
                key={data.dt}
                maxTemp={data.main.temp_max}
                temperature={data.main.temp}
                minTemp={data.main.temp_min}
                condition={data.weather[0].main}/>
            })}
            
        </div>
    </div>
    )
}


export default TileContainer;