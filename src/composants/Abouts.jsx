import React from 'react';
import "./about.css";
import aboutImg from "../assets/moi.png";
import Infos from './Infos';

const Abouts = () => {
    return (
        <div className="about section" id="about">
            <h2 className="section_title">A propos de moi</h2>
            <span className="section_subtitle">mon introduction</span>
            <div className="about_container container grid">
                <img src={aboutImg} alt="" className="about_img" />
                <div className="about_data">
                    <Infos />
                    <p className="about_description">
                        Ingénieur expérimenté, passionné par
                        l’univers ICT et son évolution
                        croissante, j’ambitionne de mettre mes
                        compétences au service d’une entreprise
                        à la culture innovante, enthousiaste et
                        audacieuse. Grâce à un parcours de
                        formation approfondie et à une somme
                        d’expériences professionnelles
                        performante, je suis devenu expert dans
                        la conception et l’adaptation
                        d’applications web.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Abouts