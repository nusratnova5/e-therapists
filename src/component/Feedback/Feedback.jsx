import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="slider-container bg-gray">
           <div className='w-3/4 mx-auto '>
           <h6 className='pt-24 mb-6 uppercase tracking-widest text-accent'>Testimonial</h6>
           <h2 className='text-5xl font-bold text-accent mb-5'>What our customer say</h2>
           <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <div className='p-5'>
                    <div className='bg-white/90 n'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quasi!</p>
                    <div>
                        <img src="" alt="" />
                        <p>name</p>
                        <p>Profession</p>
                    </div>
                </div>
                </div>
                <div className='p-5'>
                    <div className='bg-white/90'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam atque quisquam ducimus ipsam, quam temporibus amet sint ex commodi qui!</p>
                    <div>
                        <img src="" alt="" />
                        <p>name</p>
                        <p>Profession</p>
                    </div>
                </div>
                </div>
            </Slider>
           </div>
            <div style={{ textAlign: "center" }}>
                <button className="button" onClick={play}>
                    Play
                </button>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div>
        </div>
    );
};

export default Feedback;