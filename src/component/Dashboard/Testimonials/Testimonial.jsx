import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div>
            <p>{testimonial?.title}</p>
            <img src={testimonial?.image} alt="" />
        </div>
    );
};

export default Testimonial;