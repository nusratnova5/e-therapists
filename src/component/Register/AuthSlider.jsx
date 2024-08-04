import React from 'react';
import Slider from 'react-slick';
import img from '/images/auth-1.jpeg'


const AuthSlider = ({text}) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="auth_slider-container h-screen overflow-hidden py-20 relative col-span-4    ">
            <Slider {...settings}>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-xl' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-xl' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-xl' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-xl' />
                </div>
            </Slider>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pt-12">
                <button className="btn bg-charcoal-gray text-dark-blue px-10 py-16 text-2xl h-auto" dangerouslySetInnerHTML={{ __html: text }}>
                </button>
            </div>
        </div>
    );
};

export default AuthSlider;