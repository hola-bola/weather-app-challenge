import React from 'react'

const SearchResults = ({city, day, temperature, minTemp, maxTemp, condition, error }) => {
    return (
        <div>
            {city && <p>{city}</p>}
            {day && <p>{day}</p>}
            {temperature && <p>{temperature}</p>}
            {minTemp && <p> {minTemp}</p>}
            {maxTemp && <p> {maxTemp}</p>}
            {condition && <img src={condition} alt="condition-icon"/>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default SearchResults;