import {Dispatch} from '@reduxjs/toolkit';
import {instance} from '../../axios';

export const fetchAirports = () => async (dispatch: Dispatch) => {
    try {
       const response =  await instance.get('search/term', {params: {q: 'schiphol', limit: '10'}})
        console.log(response)
    } catch (e) {

    }
}