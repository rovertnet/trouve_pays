import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footers.css";

const Footers = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Trouve Pays</h1>
                <ul className="footer_list">
                    <NavLink to="/" className={(nav) => (nav.isActive ? "foter_link nav-active" : "")}>
                        <li>Pays</li>
                    </NavLink>

                    <NavLink to="/about" className={(nav) => (nav.isActive ? "foter_link nav-active" : "")}>
                        <li>A propos</li>
                    </NavLink>
                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>
                <span className="footer_copy">&#169; RovertNet. Tous droits reservés</span>
            </div>
        </footer>
    )
}

export default Footers