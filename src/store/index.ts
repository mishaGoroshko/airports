import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {airportReducer} from './slices/AirposrSlice';

const rootReducer = combineReducers({
    airport: airportReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch