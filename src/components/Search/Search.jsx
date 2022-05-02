import React from 'react';
import './search.scss'
import Vector from '../../assets/images/Vector.svg';

const Search = ({ searchHandler }) => {
    return (
        <div
            className='search-container'>
            <input
                defaultValue=''
                onChange={(e) => searchHandler(e.target.value)}
                className='search__input'
                type="text"
                placeholder="Поиск" />
            <img
                src={Vector}
                alt="Поиск" />
        </div>
    );
};

export default Search;