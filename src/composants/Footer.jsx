import React from 'react';
import "./footers.css";

const Footers = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">RovertNet</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="foter_link">A propos</a>
                    </li>

                    <li>
                        <a href="#services" className="foter_link">Services</a>
                    </li>

                    <li>
                        <a href="#competence" className="foter_link">Compétences</a>
                    </li>

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