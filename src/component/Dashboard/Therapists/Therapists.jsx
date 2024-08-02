import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Therapist from './Therapist';

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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
            {
                    therapists?.map(therapist=><Therapist therapist={therapist}/>)
                }
            </Slider>

            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Therapists;