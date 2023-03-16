import React, {useEffect} from 'react';
import {useInput} from '../hooks/useInput';
import {useDebounce} from '../hooks/useDebounce';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchAirports} from '../store/actions/airportActions';
import {useNavigate} from 'react-router-dom';

export const AirportSearch = () => {
    const {value, onChange} = useInput()
    const dispatch = useAppDispatch()
    const debouncedValue = useDebounce(value)
    const {airports} = useAppSelector(state => state.airport)
    const navigate = useNavigate()

    useEffect(() => {
        debouncedValue.length > 2 && dispatch(fetchAirports(debouncedValue))
    }, [debouncedValue])

    const onClickHandle = (icao: string) => navigate(`/airport/${icao}`)

    return (
        <div className='relative'>
            <input value={value} onChange={onChange} type='text'
                   placeholder='Type text...' className='outline-none h-[42px] mb-3'/>
            {value.length > 2 && airports && <ul
                className='absolute left-0 top-[42px] h-[150px] bg-white overflow-y-auto'>
                {airports.map(({name, icao}) =>
                    <li key={icao}
                        className='px-1 hover:bg-gray-400 hover:text-white transition-all cursor-pointer'
                        onClick={() => onClickHandle(icao)}>{name}</li>)}
            </ul>}
        </div>
    );
};
