import React from 'react';
import { setPage } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

export const Pagination = () => {

    const dispatch = useDispatch();
    
    const {
        totalPages, 
        page,
    } = useSelector((state) => state.character);

    return (
        <nav className='pageContent' >
            <p className='page'>
                Page { page } of { totalPages }
            </p>
            {
                page > 1 && (
                    <button className='btnPrev' onClick={ () => dispatch(setPage(page - 1)) }>
                        Página anterior
                    </button>
                )
            }
            {
                page < totalPages && (
                    <button className='btnNext' onClick={ () => dispatch(setPage(page + 1)) }>
                        Página siguiente
                    </button>
                )
            }
        </nav>
    )
}
export default Pagination