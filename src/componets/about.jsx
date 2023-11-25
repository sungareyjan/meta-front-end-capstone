import React from 'react';
import HeroImage from '../images/restauranfood.jpg';

const About = () => {
  return (
    <>
      <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4><strong>Little Lemon</strong></h4>
                <h6>Chicago</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptas consequatur dolores nam, dolorem aspernatur corporis veritatis, natus qui possimus aperiam ea magni impedit mollitia veniam asperiores repudiandae reiciendis? Fugit.</p>
              </div>
              <div className="col-md-6">
                <img src={HeroImage} alt="Logo" width="100%"  />
                <img src={HeroImage} alt="Logo" width="100%"  />
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;
