import React, { useState } from "react";
import { Link } from "react-router-dom";
import  "./landing.css";

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div id="landing">
            <nav className="navbar">
                <div className="logo">ExpenseFlow</div>
                <ul className={menuOpen ? "navLinks active" : "navLinks"}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><Link to="/Signin" className="contactBtn">Sign in</Link></li>
                </ul>
            </nav>

            <main>
                <section className="main" id="home">
                    home
                </section>
                <section className="main" id="about">
                    About
                </section>
                <section className="main" id="services">
                    Services
                </section>
            </main>
        </div>
        </>
    );
};

export default Landing;
