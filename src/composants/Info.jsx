import React from 'react'

const Infos = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bx bx-award"></i>
                <h3 className="about_title">Expériences</h3>
                <span className="about_subtitle">5 ans de travail</span>
            </div>

            <div className="about_box">
                <i className="bx bx-support"></i>
                <h3 className="about_title">Supports</h3>
                <span className="about_subtitle">3/5</span>
            </div>

            <div className="about_box">
                <i className="bx bx-briefcase-alt"></i>
                <h3 className="about_title">Projets terminés</h3>
                <span className="about_subtitle">5 projets</span>
            </div>
        </div>
    )
}

export default Infos