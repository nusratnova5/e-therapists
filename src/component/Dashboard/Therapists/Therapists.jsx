import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Therapist from './Therapist';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Therapists = () => {
    let sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [therapists, setTherapists] = useState([]);

    
    useEffect(() => {
        featchTherapists();
    }, []);

    const featchTherapists = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/therapists`);
            setTherapists(response.data);
        } catch (error) {
            console.error('Error fetching Therapists:', error);
            throw error; // Rethrow the error to handle it outside
        }
    }

    const handleNext = () => {
        sliderRef.current.slickNext();
        setCurrentSlide(current => current + 1);
    };

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
        setCurrentSlide(current => current - 1);
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
            <h1 className='mb-2 px-4 lg:px-0 text-lg font-medium text-dark-black'>Featured Therapist</h1>
            <div className='p-5 bg-white flex items-center gap-5 therapists rounded-lg'>
                <button className='hidden lg:block' disabled={currentSlide < 2} onClick={handlePrevious}>
                    <IoIosArrowBack className={`rounded-full p-2 text-4xl  ${currentSlide < 2 ? 'bg-light-blue text-dark-black' : 'bg-dark-blue text-white'}`} />
                </button>
                <div className='flex-1 w-0'>
                    <Slider ref={sliderRef} {...settings}>
                        {
                            therapists?.map((therapist, index) => <Therapist
                                therapist={therapist} />)
                        }
                    </Slider>
                </div>
                <button onClick={handleNext} disabled={currentSlide > 4} className='hidden lg:block'>
                    <IoIosArrowForward className={`p-2 text-4xl rounded-full ${currentSlide > 4 ? 'bg-light-blue text-dark-black' : 'bg-dark-blue text-white'}`} />
                </button>
            </div>
        </div>
    );
};

export default Therapists;