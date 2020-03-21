import React from 'react';
import Tile from '../Tile/Tile';

const TileContainer = ({ dailyData }) => {

    return (
    <div className="container">
        <div className="row justify-content-center">
        {dailyData && dailyData.map(data => {
                return <Tile 
                key={data.dt}
                maxTemp={data.main.temp_max}
                temperature={data.main.temp}
                minTemp={data.main.temp_min}/>
            })}
            {/* <Tile error={dailyData.error} /> */}
        </div>
    </div>
    )
}


export default TileContainer;