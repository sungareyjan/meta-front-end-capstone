import React from "react";
import HeroImage from '../../images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <>
      <section id="hero-section" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="row d-flex justify-content-between pt-5 align-items-xl-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h1><strong>Little Lemon</strong></h1>
              <h6>Chicago</h6>
              <p>From the sizzling grill to the delicately plated desserts, our menu is a fusion of diverse culinary influences. Whether you're in the mood for a casual lunch, a family-friendly dinner, or a romantic date night, Little Lemon caters to every occasion. Indulge in our signature dishes that showcase a perfect balance of textures and aromas, leaving you craving for more.</p>
              <button type="button" className="btn text-bold">Reserve Table</button>
            </div>
            <div className="col-xl-4 col-lg-5  col-md-6  d-flex align-items-end my-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card">
                <img src={HeroImage} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
