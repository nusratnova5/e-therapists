import React from 'react';

const Therapist = ({therapist}) => {
    return (
        <div>
            <p>{therapist?.title}</p>
            <img src={therapist?.image} alt="" />
        </div>
    );
};

export default Therapist;