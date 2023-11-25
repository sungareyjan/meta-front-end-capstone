import React from 'react';
import logoImage from '../images/Logo.svg';
const Nav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <header class="col-md-12 d-flex justify-content-between py-3">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={logoImage} alt="Logo" width="100" height="50" />
                </a>
            <ul class="nav nav-pills ">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Menu</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Reservations</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Order online</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
            </ul>
            </header>
            </div>
        </nav>
        </>
    );
};

export default Nav;
