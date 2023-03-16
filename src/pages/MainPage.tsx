import React, {useEffect, useState} from 'react';
import {AirportSearch} from '../components/AirportSearch';
import {AirportFilter} from '../components/AirportFilter';
import {AirportCard} from '../components/AirportCard/AirportCard';
import {fetchAirports} from '../store/actions/airportActions';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 4

export const MainPage = () => {
    const dispatch = useAppDispatch()
    const {loading, error, airports} = useAppSelector(state => state.airport)
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        dispatch(fetchAirports('city'))
    }, [])

    let pageCount = Math.ceil(airports.length / ITEMS_PER_PAGE)

    const pageChangeHandle = ({selected}: { selected: number }) => setItemOffset(selected)
    return (
        <div className='container max-w-[760px] m-auto pt-5'>
            <AirportSearch/>
            <AirportFilter/>

            {loading &&
                <p className='font-bold text-green-500 text-center'>Loading...</p>}
            {error && <p className='font-bold text-red-600 text-center'>{error}</p>}

            {airports?.map(airport => <AirportCard key={airport.icao} airport={airport}/>)
                .slice(itemOffset, itemOffset + ITEMS_PER_PAGE)}

            <ReactPaginate
                breakLabel='...'
                nextLabel='next >'
                onPageChange={pageChangeHandle}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel='< previous'
                // renderOnZeroPageCount={null}
                className='flex gap-x-3'
                activeClassName='bg-gray-400 text-white px-1'
                previousClassName='px-1'
                nextClassName='px-1'
            />
        </div>
    );
};
