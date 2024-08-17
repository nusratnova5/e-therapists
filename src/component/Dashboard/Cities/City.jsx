import React from 'react';

const City = ({city}) => {
    return (
        <div className=''>
            <p className='text-left text-blue text-sm underline py-4'>{city?.name}</p>
        </div>
    );
};

export default City;