import React,{useEffect} from "react";
import HeroSection from './Banner.jsx';
import HighLights from './Menu.jsx';
import Testimonials from './Service.jsx';
import About from './About.jsx';


import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <HeroSection/>
            <HighLights/>
            <Testimonials/>
            <About/>
        </>
    );
};

export default Main;
