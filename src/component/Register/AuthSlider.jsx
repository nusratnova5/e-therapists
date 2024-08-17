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
        <div className="auth_slider-container h-screen overflow-hidden py-20 relative col-span-4 pr-10">
            <Slider {...settings}>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-lg' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-lg' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-lg' />
                </div>
                <div className='h-full pr-10'>
                    <img src={img} className='h-full w-full object-cover object-top blur-lg' />
                </div>
            </Slider>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3/5">
                <div className="bg-[rgba(21,42,22,0.5)] text-center text-dark-blue px-10 rounded-lg py-16 text-2xl h-auto w-full" dangerouslySetInnerHTML={{ __html: text }}>
                </div>
            </div>
        </div>
    );
};

export default AuthSlider;