import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

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
                        <li><Link to="/signin" className="contactBtn">Sign in</Link></li>
                    </ul>
                </nav>



                <main>
                    <section className="main" id="home">
                        <h1>
                            Manage Your <span>Expenses Smartly</span>
                        </h1>
                        <p className="home-text">
                            ExpenseFlow helps you track your spending, organize your
                            budget, and gain better control over your finances with a
                            simple and modern experience.
                        </p>
                        <div className="home-features">
                            <p>✓ Track daily expenses effortlessly</p>
                            <p>✓ Create and manage budgets</p>
                            <p>✓ Visualize spending habits and trends</p>
                            <p>✓ Stay organized and save smarter</p>
                        </div>
                        <div className="home-buttons">
                            <Link to="/signin" className="btn">Get Started</Link>
                        </div>
                    </section>



                    <section className="main" id="about">
                        <h1>
                            About <span>ExpenseFlow</span>
                        </h1>
                        <p className="about-text">
                            ExpenseFlow is a smart and simple expense tracking platform
                            designed to help users manage finances with ease.
                            Track daily spending, plan budgets, and gain insights into
                            your financial habits through a clean and user-friendly experience.
                        </p>
                        <div className="cards">
                            <div className="card">
                                <h3>Our Mission</h3>
                                <p>
                                    To empower users with easy financial tools that make
                                    money management simple and effective.
                                </p>
                            </div>
                            <div className="card">
                                <h3>Why Choose Us</h3>
                                <p>
                                    Clean design, fast expense tracking, budget planning,
                                    and meaningful spending insights.
                                </p>
                            </div>
                            <div className="card">
                                <h3>Our Goal</h3>
                                <p>
                                    Help people build smarter financial habits and achieve
                                    better control over their money.
                                </p>
                            </div>
                        </div>
                    </section>



                    <section className="main" id="services">
                        <h1>
                            Our <span>Services</span>
                        </h1>
                        <p className="services-text">
                            ExpenseFlow provides smart tools to help you manage your
                            finances efficiently and keep track of your spending habits.
                        </p>
                        <div className="service-cards">
                            <div className="service-card">
                                <h3>Expense Tracking</h3>
                                <p>
                                    Record and organize daily expenses easily in one place.
                                </p>
                            </div>
                            <div className="service-card">
                                <h3>Budget Planning</h3>
                                <p>
                                    Create budgets and monitor spending to stay on track.
                                </p>
                            </div>
                            <div className="service-card">
                                <h3>Analytics & Reports</h3>
                                <p>
                                    Understand your financial habits through visual insights.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>



                <footer id="footer">
                    <h3>
                        Expense<span>Flow</span>
                    </h3>
                    <p>
                        Manage expenses smarter and build better financial habits.
                    </p>
                    <p className="copyright">
                        © 2026 ExpenseFlow. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default Landing;
