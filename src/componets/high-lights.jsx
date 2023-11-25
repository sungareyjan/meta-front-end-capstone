import React from 'react';
import Salad from '../images/greek salad.jpg';
import Bruchetta from '../images/bruchetta.svg';
import Lemon from '../images/lemon dessert.jpg';

const HighLights = () => {
  return (
    <>
      <section id="high-lights">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12 d-flex justify-content-between mb-5">
              <h1><strong>This weeks Specials!</strong></h1>
              <button type="button" className="btn">Reserve table</button>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={Salad} alt="Logo" />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title"><strong>Greek salad</strong></h5>
                    <h5 class="card-title">$ 12.99</h5>
                  </div>
                  <p class="card-text">The famous greek salad of crispy lettuce,peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons</p>
                  <button type="button" className="btn">Order Now</button>
                </div>
              </div>
            </div>
        
            <div className="col-md-4">
              <div className="card">
                <img src={Bruchetta} alt="Logo"  />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title"><strong>Bruchetta</strong></h5>
                    <h5 class="card-title">$ 5.99</h5>
                  </div>
                  <p class="card-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                  <button type="button" className="btn">Order Now</button>
                </div>
              </div>
            </div>
        
            <div className="col-md-4">
              <div className="card">
                <img src={Lemon} alt="Logo" />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title"><strong>Lemon Dessert</strong></h5>
                    <h5 class="card-title">$ 5.99</h5>
                  </div>
                  <p class="card-text">this comes straight from grandma's recipes book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
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
