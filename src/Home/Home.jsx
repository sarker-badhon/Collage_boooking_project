import React from 'react';
import Slider from '../Slider/Slider';
import Section from '../HomePageSection/Section';
import DreamCollege from '../HomePageSection/DreamCollege';
import AboutSection from '../AboutSection/AboutSection';
import CollegeGallery from '../CollegeGallery/CollegeGallery';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutSection></AboutSection>
            {/* <DreamCollege></DreamCollege> */}
            <CollegeGallery></CollegeGallery>
            <Section></Section>
        </div>
    );
};

export default Home;