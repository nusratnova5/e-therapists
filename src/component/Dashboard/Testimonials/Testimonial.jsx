import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        // <div>
        //     <p>{testimonial?.title}</p>
        //     <img src={testimonial} alt="" />
        // </div>
        <div className='flex '>
            <div>
                <img src={testimonial?.image} alt="" />
            </div>
            <div className='flex flex-col'>
                <p>{testimonial?.address}</p>
                <p>{testimonial?.title}</p>
                <p>{testimonial?.description}</p>
            </div>
        </div>
    );
};

export default Testimonial;