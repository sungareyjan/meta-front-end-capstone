import React from 'react';
import HeroSection from './hero-section.jsx';
import HighLights from './high-lights.jsx';
import Testimonials from './testimonials.jsx';
import About from './about.jsx';

const Main = () => {
    return (
        <>
            <main>
                <HeroSection/>
                <HighLights/>
                <Testimonials/>
                <About/>
            </main>
        </>
    );
};

export default Main;
