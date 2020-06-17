import React from 'react';
import { clear, clouds, drizzle, rain, snow, sunny, thunderstorms } from '../../icons';
import './Tile.css';
const moment = require('moment');


const Tile = ({temperature, minTemp, maxTemp, condition, day }) => {
   
    function getIcon(weatherCondition) {
        if(weatherCondition === 'Clouds'){
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
         
        else {
            return sunny;
        }
    }

    return (
            <div className="tile col-lg-3">
                <div className="heading">
                    {day && <h3>{moment(day).format('dddd')}</h3>}
                    {day && <p className="subheading">{moment(day).format('MMMM Do, h:mm a')}</p>}
                </div>
                <div className="dataDiv">
                    {maxTemp && <p className="sup"> {Math.round(maxTemp)}<sup>°C</sup></p>}
                    {temperature && <p className="temp">{Math.round(temperature)}<sup>°C</sup></p>}
                    {minTemp && <p className="sub"> {Math.round(minTemp)}<sup>°C</sup></p>}
                </div>
                    {condition && <p className="icon-title">{condition}</p>}
                    {condition && <img src={getIcon(condition)} alt={condition}/>}
                    
            </div>
    )
}

export default Tile;