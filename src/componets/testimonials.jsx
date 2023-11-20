import React from 'react';
import HeroImage from '../icons_assets/Logo.svg';
const Testimonials = () => {
  return (
    <>
   <section id="testimonials">
       <div className="container py-4 mb-4">
         <h1 className="text-center my-5">Testimonials</h1>
         <div className="row">
    
           <div className="col-md-3">
             <div className="card">
               <div className="card-body">
                 <h5>title</h5>
                 <img src={HeroImage} alt="Logo" width="100" height="250" />
                 <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
               </div>
             </div>
           </div>
    
           <div className="col-md-3">
             <div className="card">
               <div className="card-body">
                 <h5>title</h5>
                 <img src={HeroImage} alt="Logo" width="100" height="250" />
                 <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
               </div>
             </div>
           </div>
    
           <div className="col-md-3">
             <div className="card">
               <div className="card-body">
                 <h5>title</h5>
                 <img src={HeroImage} alt="Logo" width="100" height="250" />
                 <p>Lorem ipsum dolor sit amet consectetur  eos sequi beatae voluptates?</p>
               </div>
             </div>
           </div>
    
           <div className="col-md-3">
             <div className="card">
               <div className="card-body">
                 <h5>title</h5>
                 <img src={HeroImage} alt="Logo" width="100" height="250" />
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
