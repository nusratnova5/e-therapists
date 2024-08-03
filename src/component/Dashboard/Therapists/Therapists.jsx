import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Therapist from './Therapist';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Therapists = () => {
    let sliderRef = useRef(null);
    const [therapists, setTherapists] = useState([]);
    useEffect(() => {
        axios.get('/jsons/therapist.json')
            .then(response => {
                setTherapists(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
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
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='p-5 bg-white flex gap-5 therapists'>
            <button onClick={handlePrevious}><IoIosArrowBack className='p-2 text-4xl bg-gray rounded-full' /></button>
            <div className='flex-1 w-0'>
                <Slider ref={sliderRef} {...settings}>
                    {
                        therapists?.map(therapist => <Therapist therapist={therapist} />)
                    }
                </Slider>
            </div>
            <button onClick={handleNext}><IoIosArrowForward className='p-2 text-4xl bg-gray rounded-full'/></button>
        </div>
    );
};

export default Therapists;