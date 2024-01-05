import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, setPage } from '../actions/index';
import useDebounce from '../hooks/useDebounce';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {

    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.character);

    const handleSearch = useDebounce((event) => {
        const { value } = event.target;
        dispatch(setPage(1));
        dispatch(setSearchTerm(value));
    }, 1000);

    return (
        <div className='search'>
            <input
                type='text'
                id='search'
                className='search'
                placeholder='Buscar personaje'
                spellCheck='false' 
                onChange={ handleSearch }
            />
        </div>
    )
}


export default SearchBar;
