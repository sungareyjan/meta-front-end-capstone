import React from 'react';
import Mediterranean from '../images/Mediterranean.jpg';
import Food from '../images/food.webp';

const About = () => {
  return (
    <>
      <section id="about" >
        <div className="container mt-5">
          <div className="row align-items-xl-center gy-5">
            <div className="col-xl-6 col-sm-12" data-aos="fade-up"data-aos-delay="100">
              <h4><strong>Little Lemon</strong></h4>
              <h6>Chicago</h6>
              <p>At Little Lemon, we invite you to embark on a culinary adventure where zest meets sophistication, and each dish is a celebration of vibrant flavors. Nestled in the heart of a charming locale, our restaurant is more than just a dining experience—it's a gastronomic journey that tantalizes the senses and leaves an indelible mark on your palate..</p>
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="image-container" data-aos="zoom-out" data-aos-delay="150">
                <img className="first-image" src={Mediterranean} alt="restaurant" />
                <img className="second-image" src={Food} alt="Chef" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
