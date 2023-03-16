import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav
            className='flex justify-between items-center h-[50px] px-3 bg-gray-200 shadow-md'>

            <Link to={'/'}><h2 className='font-bold hover:underline'>Airport</h2></Link>
            <Link to={'/auth'} className='hover:underline'>Auth</Link>
        </nav>
    );
};
