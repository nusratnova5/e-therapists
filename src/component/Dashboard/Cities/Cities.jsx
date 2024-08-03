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
        <div className='bg-white'>
            <h1>Popular Cities</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                    cities?.map(city=><City city={city}/>)
                }
            </div>
        </div>
    );
};

export default Cities;