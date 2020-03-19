import React from 'react'

const SearchResults = ({city, dailyData, description, day, temperature, minTemp, maxTemp, condition, error }) => {
    return (
        <div className="card text-white bg-warning mb-3">
            {city && <p className="card-title">{city}</p>}
            {description && <p>{description}</p>}
            {day && <p>{day}</p>}
            {maxTemp && <sup> {maxTemp}</sup>}
            {temperature && <p className="card-text">{temperature}</p>}
            {minTemp && <sub> {minTemp}</sub>}
            {condition && <img src={condition} alt="condition-icon"/>}
            {error && <p>{error}</p>}
            {dailyData && <p>{dailyData}</p>}
        </div>
    )
}

export default SearchResults;