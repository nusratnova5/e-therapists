import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonial, setTestimonial] = useState({});

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

  const handleReadMore = (currentTestimonial) => {
    document.getElementById('testimonialModal').showModal();
    setTestimonial(currentTestimonial);
  }

  return (
    <div className='flex flex-col'>
      <h1 className='mb-2 px-4 lg:px-0 text-lg font-medium text-dark-black'>Featured Testimonials</h1>
      <div className="slider-container max-w-full overflow-hidden p-5 rounded-lg bg-white flex-1">
        <Slider {...settings}>
          {
            testimonials?.map((testimonial, index) => <Testimonial key={index} handleReadMore={handleReadMore} testimonial={testimonial} />)
          }
        </Slider>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="testimonialModal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Full Description</h3>
          <p className="py-4">{testimonial?.description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Testimonials;
