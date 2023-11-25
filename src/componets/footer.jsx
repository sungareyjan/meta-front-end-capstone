import React from 'react';
import logoImage from '../images/Logo .svg';
const Footer = () => {
    return (
        <>
        <footer id="footer" data-aos="fade-up"data-aos-delay="100">
            <div className="container" >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
                    <div className="col-xl-3 col-lg-6"  data-aos="fade-up"data-aos-delay="110">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={logoImage} alt="Logo" width="160" height="70" />
                        </a>
                        <p>We are family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="col-xl-3 col-lg-6"  data-aos="fade-up"data-aos-delay="200">
                        <h5>Doormat Navigation</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Menu</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Reservations</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Order Online</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6" data-aos="fade-up"data-aos-delay="300">
                        <h5>Contact</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Address<br/>123 Town Street, Chicago</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Phone<br/>+00 123 456 789</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Email<br/>little@lemon.com</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6"  data-aos="fade-up"data-aos-delay="400">
                        <h5>Social Media links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
