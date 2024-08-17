import axios from 'axios';
import React, { useEffect, useState } from 'react';
import City from './City';

const Cities = () => {
    const [cities, setCities] = useState([]);
    const cols = 3; // Number of columns in the grid

    useEffect(() => {
        axios.get('/jsons/cities.json')
            .then(response => {
                setCities(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const shouldRenderBorder = (index) => {
        const isLastInRow = (index + 1) % cols === 0;
        const totalItems = cities.length;
        const totalRows = Math.ceil(totalItems / cols);
        const currentRow = Math.floor(index / cols) + 1;
        const isLastRow = currentRow === totalRows;
        return !isLastRow && isLastInRow;
    };

    return (
        <div>
            <h1 className='px-4 lg:px-0 mb-2 text-lg font-medium text-dark-black'>Popular Cities</h1>
            <div className='bg-white rounded-lg'>
                <div className='grid grid-cols-3 gap-x-2 gap-y-1 px-5 py-1'>
                    {cities?.map((city, index) => (
                        <React.Fragment key={index}>
                            <City city={city} />
                            {shouldRenderBorder(index) && (
                                <div className="col-span-3 border-t border-gray"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cities;
