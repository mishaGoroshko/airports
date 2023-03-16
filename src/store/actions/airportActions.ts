import {instance} from '../../axios';
import {AppDispatch} from '../index';
import {IAirport, IServerResponse} from '../../models/models';
import {fetchError, fetching, fetchSuccess} from '../slices/AirposrSlice';
import {AxiosError} from 'axios';

export const fetchAirports = (searchQuery: string, limit: number = 250) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetching())
        const response = await instance.get<IServerResponse<IAirport>>('search/term', {
            params: {
                q: searchQuery,
                limit
            }
        })
        dispatch(fetchSuccess(response.data.items))
    } catch (e) {
        dispatch(fetchError(e as AxiosError))
    }
}