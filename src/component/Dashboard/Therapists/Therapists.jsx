import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Therapist from './Therapist';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Therapists = ({therapists}) => {
    let sliderRef = useRef(null);

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                arrows: false,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    speed: 500
                }
            }
        ]
    };
    return (
        <div>
            <h1 className='mb-2 px-4 text-lg font-medium text-dark-black'>Featured Testimonials</h1>
            <div className='p-5 bg-white flex items-center gap-5 therapists rounded-lg'>
                <button className='hidden lg:block' onClick={handlePrevious}>
                    <IoIosArrowBack className={`rounded-full p-2 text-4xl  ${'abc' === 'previous' ? 'bg-dark-blue text-white' : 'bg-light-blue text-dark-black'}`} />
                </button>
                <div className='flex-1 w-0'>
                    <Slider ref={sliderRef} {...settings}>
                        {
                            therapists?.map((therapist, index) => <Therapist
                                therapist={therapist} />)
                        }
                    </Slider>
                </div>
                <button
                    onClick={handleNext}
                    className='hidden lg:block'
                >
                    <IoIosArrowForward className={`p-2 text-4xl rounded-full ${'abc' === 'next' ? 'bg-dark-blue text-white' : 'bg-light-blue text-dark-black'}`} />
                </button>
            </div>
        </div>
    );
};

export default Therapists;