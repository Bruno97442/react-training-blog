import React from "react";
import { Link } from "react-router-dom";
import { getLinkPath } from "../Routing";

import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-white py-4 bg-secondary footer-custom">
            <div className="container">
                <nav className="row justify-content-center">
                    <ul className="col-12 col-md-3 list-unstyled text-center">
                        <li className="font-weight-bold mb-2 text-center">React Blog</li>
                        <li className="nav-item">
                            <Link to={getLinkPath("articles")} className="nav-link text-reset">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={getLinkPath("about")} className="nav-link text-reset text-center">About Me</Link>
                        </li>
                    </ul>
                    <ul className="col-12 col-md-3 list-unstyled text-center">
                        <li className="font-weight-bold mb-2 text-center">Our Policies</li>
                        <li className="nav-item">
                            <Link to="#" className="text-reset nav-link">Terms of Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#' className="text-reset text-center nav-link">Privacy</Link>
                        </li>
                    </ul>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="text-center list-unstyled mb-2">Follow Us</li>
                        <li className="d-flex justify-content-evenly">
                            <i className="bi bi-facebook" />
                            <i className="bi bi-instagram" />
                            <i className="bi bi-twitter" />
                            <i className="bi bi-youtube" />
                        </li>
                    </ul>
                    <div className="container">
                        <p className="text-center mb-0 mt-2">
                            &copy; {new Date().getFullYear()} REACT BLOG
                        </p>

                    </div>


                </nav>

            </div>
        </footer>
    );
};

export default Footer;
