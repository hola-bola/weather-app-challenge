import React from 'react';
import './SearchBar.css';

const SearchBar = ({getWeather}) => {
    return (
    <div className="form">
        <form onSubmit={getWeather} className="form-group">
            <input
            type="text"
            placeholder="Enter your City"
            name="city"
            className="form-control"
            />
         <button type="submit" className="btn btn-primary btn-lg btn-warning">Get Weather</button>
        </form>
    </div>
    )
}

export default SearchBar;