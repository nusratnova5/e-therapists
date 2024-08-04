import axios from 'axios';
import React, { useEffect, useState } from 'react';
import City from './City';

const Cities = () => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        axios.get('/jsons/cities.json')
            .then(response => {
                setCities(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            <h1 className='px-4 mb-2 text-lg font-medium text-dark-black'>Popular Cities</h1>
            <div className='bg-white rounded-lg'>
                <div className='grid grid-cols-3 gap-x-2 gap-y-1'>
                    {cities?.map((city, index) => (
                        <React.Fragment key={index}>
                            <City city={city} />
                            {(index + 1) % 3 === 0 && (
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