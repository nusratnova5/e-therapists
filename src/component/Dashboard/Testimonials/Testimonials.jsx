import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Testimonial from './Testimonial';

const Testimonials = () => {
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
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
   <div>
    <h1 className='mb-2 px-4 text-lg font-medium text-dark-black'>Featured Testimonials</h1>
     <div className="slider-container max-w-full overflow-hidden p-5 rounded-lg bg-white">
      <Slider {...settings}>
        {
          testimonials?.map((testimonial, index) => <Testimonial key={index} testimonial={testimonial} />)
        }
      </Slider>
    </div>
   </div>
  );
}

export default Testimonials;
