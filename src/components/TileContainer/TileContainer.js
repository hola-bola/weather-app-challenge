import React from 'react';
import Tile from '../Tile/Tile';
import './TileContainer.css'

const TileContainer = ({ dailyData, error }) => {

    return (
    <div className="container">
        <div className="row justify-content-center">
            {error && <p className="error">{error}</p>}
            {dailyData && dailyData.map(data => {
                    return <Tile 
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