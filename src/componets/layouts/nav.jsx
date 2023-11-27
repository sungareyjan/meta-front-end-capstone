import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logoImage from '../../images/Logo.svg';
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
                            <a href="" className="logo">
                                <img src={logoImage} alt="logo"/>
                            </a>
                            <div className="menu-icon" onClick={toggleMenu}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <div className={`nav-links ${menuOpen ? "visible" : ""}`}>
                                <ul>
                                    <Link to="/" ><li>Home</li></Link>
                                    <Link to="/about" ><li>About</li></Link>
                                    <Link to="/services" ><li>Services</li></Link>
                                    <Link to="/menu" ><li>Menu</li></Link>
                                    <Link to="/" ><li>Reservations</li></Link>
                                    <Link to="/" ><li>Order</li></Link>
                                    <Link to="/" ><li>Login</li></Link>
                                    {/* <a href=""><li>Home</li></a>
                                    <a href="#about"><li>About</li></a>
                                    <a href="#testimonials"> <li>Services</li></a>
                                    <a href="#high-lights"> <li>Menu</li></a>
                                    <a href="/"> <li>Reservations</li></a>
                                    <a href="/booking"> <li>Order</li></a>
                                    <a href="/"> <li>Login</li></a> */}
                                </ul>
                            </div>
                        </nav>
                </div>
            </section>
        </>
    );
};

export default Nav;
