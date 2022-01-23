import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import SlickSlider from 'react-slick';

function Slider (props) {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        return(
            <div className="slick">
                <SlickSlider {...settings}>
                    {props.elements}
                </SlickSlider>
            </div>
        )
}

export default Slider;