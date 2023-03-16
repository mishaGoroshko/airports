import {IAirport} from '../../models/models';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

interface AirposrState {
    loading: boolean,
    error: string,
    airports: IAirport[],
}

const initialState: AirposrState = {
    loading: false,
    error: '',
    airports: [],
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        fetching: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action: PayloadAction<IAirport[]>) => {
            state.error = ''
            state.loading = false
            state.airports = action.payload
        },
        fetchError: (state, action: PayloadAction<AxiosError>) => {
            state.loading = false
            state.error = action.payload.message
            state.airports = []
        }
    }
})

export const {fetching, fetchSuccess, fetchError} = airportSlice.actions
export const airportReducer = airportSlice.reducer