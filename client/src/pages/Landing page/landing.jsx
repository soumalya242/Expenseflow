import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="logo">ExpenseFlow</div>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <section>
                        <li>
                            <a href="home">Home</a>
                        </li>
                    </section>

                    <section>
                        <li>
                            <a href="about">About</a>
                        </li>
                    </section>

                    <section>
                        <li>
                            <a href="services">Services</a>
                        </li>
                    </section>


                    <section>
                        <li>
                            <Link to="/Signin" className="contact-btn">
                            Sign in
                            </Link>
                        </li>
                    </section>
                </ul>
            </nav>
        </>
    );
};

export default Landing;
