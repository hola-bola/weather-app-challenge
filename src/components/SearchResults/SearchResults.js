import React from 'react';
import Icons from '../../icons';
import './SearchResults.css';

const SearchResults = ({temperature, minTemp, maxTemp,condition, error }) => {
   
 
    return (
        <div className="container">
            <div className="row">
                {temperature && <div className="tile col-lg-3  bg-light">
                    {maxTemp && <p className="sup"> {Math.round(maxTemp)}<sup>°C</sup></p>}
                    {temperature && <p className="temp">{Math.round(temperature)}<sup>°C</sup></p>}
                    {minTemp && <p className="sub"> {Math.round(minTemp)}<sup>°C</sup></p>}
                    {condition && <img src={condition} alt="condition-icon"/>}
                </div>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    )
}

export default SearchResults;