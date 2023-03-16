import React from 'react';
import {IAirport} from '../../models/models';
import s from './AirportCard.module.css'
import {useNavigate} from 'react-router-dom';

interface IAirportCard {
    airport: IAirport
}

export const AirportCard = ({airport}: IAirportCard) => {
    const {name, shortName, municipalityName, countryCode, icao} = airport

    const navigate = useNavigate()

    const clickHandle = () => navigate(`/airport/${icao}`)
    return (
        <div className={s.card} onClick={clickHandle}>
            <h3 className='font-bold'>{name}</h3>
            <p className='flex justify-between'>
                <span className='underline'>short name:</span> {shortName}
            </p>
            <p className='flex justify-between'>
                <span className='underline'>municipality name:</span> {municipalityName}
            </p>
            <p className='flex justify-between'>
                <span className='underline'>country code:</span> {countryCode}
            </p>
        </div>
    );
};
