import React, {useEffect} from 'react';
import {AirportSearch} from '../components/AirportSearch';
import {AirportFilter} from '../components/AirportFilter';
import {AirportCard} from '../components/AirportCard';
import {useDispatch} from 'react-redux';
import {fetchAirports} from '../store/actions/airportActions';
import {useAppDispatch} from '../hooks/redux';

export const MainPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAirports())
    })
    return (
        <div className='container max-w-[760px] m-auto pt-5'>
            <AirportSearch/>
            <AirportFilter/>
            <AirportCard/>
        </div>
    );
};
