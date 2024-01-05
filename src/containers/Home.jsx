
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../api/index';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import CharacterCard from '../components/CharacterCard';
import { setCharacters } from '../actions/index';

const Home = () => {

    const dispatch = useDispatch();
    const { searchTerm, page } = useSelector((state) => state.character);

    const fetchData = async () => {
        try {
            const result = await getCharacters(searchTerm, page);

            if (result.info && result.info.count > 0) {
                dispatch(setCharacters(result.results, result.info.pages, result.info.count));
            }
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, page]);


    return (
        <div className='home'>
            <SearchBar />
            <CharacterCard />
            <Pagination />
        </div>
    );
};

export default Home;



