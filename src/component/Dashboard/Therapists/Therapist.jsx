import React from 'react';
import { FaCar } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const Therapist = ({ therapist }) => {
    return (
         <div className="card card-compact bg-base-100 border border-gray">
            <figure>
                <img
                    src={therapist?.image}
                    alt="therapist" className='h-40 w-full object-center object-cover p-3 rounded-3xl' />
            </figure>
            <div className="relative">
                <h2 className="card-title">{therapist?.name}</h2>
                <div className='flex items-center'>
                <MdLocationOn/>
                <p>{therapist?.address}</p>
                </div>
                <div className='flex items-center'>
                <FaCar/>
                <p>{therapist?.workplace}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-t-none w-full underline">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Therapist;