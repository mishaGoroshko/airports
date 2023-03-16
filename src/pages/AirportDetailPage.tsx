import React from 'react';
import {useParams} from 'react-router-dom';

export const AirportDetailPage = () => {
    const {id} = useParams<{ id?: string }>()

    return (
        <div>
            AirportDetailPage: {id}
        </div>
    );
};
