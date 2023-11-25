import React from 'react';
import HeroImage from '../images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <>
      <section id="hero-section">
        <div className="container">
          <div className="row d-flex justify-content-between pt-5">
            <div className="col-md-4">
              <h1><strong>Little Lemon</strong></h1>
              <h6>Chicago</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam provident, vero blanditiis qui voluptatibus est voluptatem distinctio veniam nesciunt minima, non, perferendis ab vitae cum unde modi cupiditate tempore?</p>
              <button type="button" className="btn text-bold">Reserve Table</button>
            </div>
            <div className="col-md-3 d-flex align-items-end my-4">
              <img src={HeroImage} alt="Logo" width="100%"  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
