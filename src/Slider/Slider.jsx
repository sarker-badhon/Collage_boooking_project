import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camp_1 from '../assets/camp-03.jpg'
import camp_2 from '../assets/camp_2.jpg'
import camp_3 from '../assets/camp_01.jpeg'
import camp_4 from '../assets/camp_4.jpg'
const Slider = () => {
    return (
        <Carousel>
        <div >
            <img  src={camp_1} />
        </div>
        <div>
            <img src={camp_2} />
        </div>
        <div>
            <img  src={camp_3} />
        </div>
        <div>
            <img src={camp_4} />
        </div>
    </Carousel>
    );
};

export default Slider;