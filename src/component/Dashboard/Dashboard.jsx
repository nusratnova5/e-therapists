import React from 'react';
import Therapists from './Therapists/Therapists';
import Testimonials from './Testimonials/Testimonials';
import Search from './Search/Search';
import Cities from './Cities/Cities';

const Dashboard = () => {
    return (
        <div>
            <Search />
            <Therapists />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6'>
                <Testimonials className='m-5' />
                <Cities />
            </div>
        </div>
    );
};

export default Dashboard;
