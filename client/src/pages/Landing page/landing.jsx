import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="logo">MyBrand</div>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <a href="home">Home</a>
                    </li>

                    <li>
                        <a href="about">About</a>
                    </li>

                    <li>
                        <a href="services">Services</a>
                    </li>

                    <li>
                        <a href="portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a href="contact" className="contact-btn">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <section id="home">
                <h1>Home</h1>
            </section>

            <section id="about">
                <h1>About</h1>
            </section>

            <section id="services">
                <h1>Services</h1>
            </section>

            <section id="portfolio">
                <h1>Portfolio</h1>
            </section>

            <section id="contact">
                <h1>Contact</h1>
            </section>
        </>
    );
};

export default Landing;
