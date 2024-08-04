import React, { useEffect, useState } from 'react';
import Therapists from './Therapists/Therapists';
import Testimonials from './Testimonials/Testimonials';
import Search from './Search/Search';
import Cities from './Cities/Cities';
import axios from 'axios';

const Dashboard = () => {
    const [therapists, setTherapists] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('/jsons/therapist.json')
            .then(response => {
                const query = searchQuery.toLowerCase();
                const allTherapists = response.data;

                if (searchQuery) {
                    const searchedTherapists = allTherapists.filter(therapist =>
                        therapist.name.toLowerCase().includes(query) ||
                        therapist.address.toLowerCase().includes(query) ||
                        therapist.workplace.toLowerCase().includes(query)
                    )
                    setTherapists(searchedTherapists);
                } else {
                    setTherapists(allTherapists);
                }

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [searchQuery]);
    return (
        <div>
            <Search setSearchQuery={setSearchQuery} />
            <Therapists therapists={therapists} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6'>
                <Testimonials className='m-5' />
                <Cities />
            </div>
        </div>
    );
};

export default Dashboard;
