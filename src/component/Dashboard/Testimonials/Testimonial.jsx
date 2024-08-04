import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="py-1">
            <div className='flex w-full lg:h-[160px] border border-gray rounded-lg overflow-hidden'>
                <div className="">
                    <img src={testimonial?.image} alt="" className="w-[130px] h-[140px] rounded-lg m-2" />
                </div>
                <div className="flex-1 flex flex-col justify-center ">
                    <div className='flex items-center text-dark-gray text-xs gap-1 mb-1'>
                        <MdLocationOn />
                        <p>{testimonial?.address}</p>
                    </div>
                    <p className="my-1 font-medium text-sm text-dark-black">{testimonial?.title} <span className='text-dark-blue'>by {testimonial?.bookedBy}</span></p>
                    <p className="my-1 text-dark-gray text-xs">{testimonial?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
