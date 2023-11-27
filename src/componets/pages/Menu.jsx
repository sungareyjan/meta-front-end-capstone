import React from 'react';
import Salad from '../../images/greek salad.jpg';
import Bruchetta from '../../images/bruchetta.svg';
import Lemon from '../../images/lemon dessert.jpg';

const HighLights = () => {
  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="row align-items-xl-center gy-5 my-5">
            <div className="col-xl-12 d-flex justify-content-between"  data-aos="fade-up"  data-aos-delay="100">
              <h1><strong>This weeks Specials!</strong></h1>
              <button type="button" className="btn">Reserve table</button>
            </div>
            <div className="col-xl-4 col-lg-6" data-aos="zoom-in"  data-aos-delay="200">
              <div className="card">
                <img src={Salad} alt="Logo"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title"><strong>Greek salad</strong></h5>
                    <h5 className="card-title">$ 12.99</h5>
                  </div>
                  <p className="card-text">The famous greek salad of crispy lettuce,peppers, olives and our fota cheese, garnished with crunchy garlic and rosemary croutons</p>
                  <button type="button" className="btn">Order Now</button>
                </div>
              </div>
            </div>
        
            <div className="col-xl-4 col-lg-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="card">
                <img src={Bruchetta} alt="Logo"  />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title"><strong>Bruchetta</strong></h5>
                    <h5 className="card-title">$ 5.99</h5>
                  </div>
                  <p className="card-text">Our famous Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                  <button type="button" className="btn">Order Now</button>
                </div>
              </div>
            </div>
        
            <div className="col-xl-4 col-lg-6" data-aos="zoom-in"  data-aos-delay="400">
              <div className="card">
                <img src={Lemon} alt="Logo" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title"><strong>Lemon Dessert</strong></h5>
                    <h5 className="card-title">$ 5.99</h5>
                  </div>
                  <p className="card-text">this comes straight from grandma's recipes book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <button type="button" className="btn">Order Now</button>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
    </>
  );
};

export default HighLights;
