import React, { useState } from "react";
import logoImage from '../images/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <section id="nav">
                <div  className="container">
                        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                            <a href="/" className="logo">
                                <img src={logoImage} alt="" />
                            </a>
                            <div className="menu-icon" onClick={toggleMenu}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <div className={`nav-links ${menuOpen ? "visible" : ""}`}>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Menu</a></li>
                                    <li><a href="/">Reservations</a></li>
                                    <li><a href="/booking">Order</a></li>
                                    <li><a href="/">Login</a></li>
                                </ul>
                            </div>
                        </nav>
                </div>
            </section>
        </>
    );
};

export default Nav;
