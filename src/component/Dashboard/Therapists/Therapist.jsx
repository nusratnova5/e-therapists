import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const Therapist = ({ therapist, isActive, onButtonClick }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className="card card-compact bg-white border border-gray">
            <figure>
                <img
                    src={therapist?.image}
                    alt="therapist" className='h-40 w-full object-center object-cover p-3 rounded-3xl' />
            </figure>
            <div className="relative">
                <div className='ml-3'>
                    <h2 className="text-dark-black font-medium text-sm mb-2">{therapist?.name}</h2>
                    <div className='flex items-center text-dark-gray text-xs gap-1 mb-1'>
                        <MdLocationOn />
                        <p>{therapist?.address}</p>
                    </div>
                    <div className='flex items-center text-dark-gray text-xs gap-1 mb-5'>
                        <FaCar />
                        <p>{therapist?.workplace}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button
                        className={`btn rounded-t-none w-full underline ${isActive ? 'bg-dark-blue text-white' : 'bg-light-blue'}`}
                        onClick={onButtonClick}
                    >
                        See Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Therapist;