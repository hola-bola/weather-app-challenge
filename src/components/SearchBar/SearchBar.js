import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input
            type='text'
            placeholder='Enter your City'
            name='city'
            />
            <button>Get Weather</button>
        </form>
    )
}

export default SearchBar;