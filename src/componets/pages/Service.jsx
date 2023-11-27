import React from 'react';
import MarioAndAdrianA from '../../images/Mario and Adrian A.jpg';
import MarioAndAdrianB from '../../images/Mario and Adrian b.jpg';
import ChefB from '../../images/restaurant chef B.jpg';
import HeroImage from '../../images/restauranfood.jpg';
const Testimonials = () => {
  return (
    <>
      <section id="services"  data-aos="fade-up"data-aos-delay="100">
        <div className="container py-4 my-5 ">
          <h1 className="text-center my-5">Services</h1>
          <div className="row align-items-xl-center gy-5">

            <div className="col-xl-3 col-md-6"  data-aos="fade-up"data-aos-delay="150">
              <div className="card">
            {/* <div className="card-header"><h5>Chef - Mario and Adrian</h5></div> */}
                  <img src={MarioAndAdrianA} alt="Mario and Adrian" />
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6"  data-aos="fade-up"data-aos-delay="200">
              <div className="card">
              {/* <div className="card-header"><h5>Chef - Mario and Adrian</h5></div> */}
                  <img src={MarioAndAdrianB} alt="Mario and Adrian" />
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6"  data-aos="fade-up"data-aos-delay="250">
              <div className="card">
              {/* <div className="card-header"><h5>Chef - Mario </h5></div> */}
                  <img src={ChefB} alt="restaurant chef B" />
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up"data-aos-delay="300">
              <div className="card">
                {/* <div className="card-header"><h5>Chef - Adrian </h5></div> */}
                  <img src={HeroImage} alt="Logo" />
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
