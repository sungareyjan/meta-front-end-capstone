import React,{useEffect} from "react";
import Mediterranean from '../../images/Mediterranean.jpg';
import Food from '../../images/food.webp';
const About = () => {
  useEffect(() => {
    window.scrollTo(0,0);
}, [])
  return (
    <>
      <section id="about">
        <div className="container mt-5 pb-0 pt-5 section-container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
              <h3><strong>Little Lemon</strong></h3>
              <h6>Chicago</h6>
              <p>At Little Lemon, we invite you to embark on a culinary adventure where zest meets sophistication, and each dish is a celebration of vibrant flavors. Nestled in the heart of a charming locale, our restaurant is more than just a dining experience—it's a gastronomic journey that tantalizes the senses and leaves an indelible mark on your palate..</p>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="image-container row align-items-xl-center gy-5" data-aos="zoom-out" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="card">
                    <img className="first-image" src={Mediterranean} alt="restaurant" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <img className="second-image" src={Food} alt="Chef" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
