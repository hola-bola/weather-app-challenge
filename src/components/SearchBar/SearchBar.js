import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
    <div className="form">
        <form onSubmit={props.getWeather} className="form-group">
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