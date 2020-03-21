import React from 'react';
import { clear, clouds, drizzle, rain, snow, sunny, thunderstorms } from '../../icons';
import './Tile.css';

const Tile = ({temperature, minTemp, maxTemp, condition }) => {
   
    function getIcon(weatherCondition) {
        if(weatherCondition === 'Cloud'){
            return clouds
        }
        if(weatherCondition === 'Rain'){
            return rain
        }
        if(weatherCondition === 'Clear'){
            return clear
        }
       if(weatherCondition === 'Thunderstorm'){
            return thunderstorms
        }
        if(weatherCondition === 'Drizzle'){
            return drizzle
        }
        if(weatherCondition === 'Snow'){
            return snow
        }
        if(weatherCondition === 'Cloud'){
            return clouds
        }
        else {
            return sunny;
        }
    }

    return (
            <div className="tile col-lg-3">
                <div className="dataDiv">
                    {maxTemp && <p className="sup"> {Math.round(maxTemp)}<sup>°C</sup></p>}
                    {temperature && <p className="temp">{Math.round(temperature)}<sup>°C</sup></p>}
                    {minTemp && <p className="sub"> {Math.round(minTemp)}<sup>°C</sup></p>}
                </div>
                    {condition && <img src={getIcon(condition)} alt={condition}/>}
                    {console.log(clouds)}
            </div>
    )
}

export default Tile;