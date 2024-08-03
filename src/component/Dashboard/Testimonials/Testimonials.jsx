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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
    };
    return (
        <div className='h-[160px]'>
            <Slider {...settings}>
                {
                    testimonials?.map(testimonial=><Testimonial testimonial={testimonial}/>)
                }
            </Slider>
        </div>
    );
};

export default Testimonials;