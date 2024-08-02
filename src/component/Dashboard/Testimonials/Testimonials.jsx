import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Testimonial from './Testimonial';

const Testimonials = () => {
    let sliderRef = useRef(null);
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        axios.get('/jsons/testimonials.json')
            .then(response => {
                setTestimonials(response.data);
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
                    testimonials?.map(testimonial=><Testimonial testimonial={testimonial}/>)
                }
            </Slider>

            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Testimonials;