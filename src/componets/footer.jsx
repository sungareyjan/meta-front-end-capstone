import React from 'react';
import logoImage from '../icons_assets/Logo.svg';
const Footer = () => {
    return (
        <>
        <footer id="footer">
            <div className="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div class="col mb-3">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={logoImage} alt="Logo" width="160" height="70" />
                        </a>
                        <p>We are family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div class="col mb-3">
                        <h5>Doormat Navigation</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Menu</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Reservations</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Order Online</a></li>
                        </ul>
                    </div>
                    <div class="col mb-3">
                        <h5>Contact</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Address</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Phone</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Email</a></li>
                        </ul>
                    </div>
                    <div class="col mb-3">
                        <h5>Social Media links</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
