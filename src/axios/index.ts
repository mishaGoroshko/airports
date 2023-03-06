import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    headers: {
        'X-RapidAPI-Key': '2164aa8009msha004bb87554ec4bp190e62jsn011dee306116',
        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    }
});
