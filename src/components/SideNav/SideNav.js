import React from 'react';
import image from './suraj.JPEG';
import './sidenav.css';
import pdf from './Document/surajresume.pdf'

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={image}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Suraj Gurung</h2>
            <p className="subtitle">"Fullstack Developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("Contact")}>Contact</p>

                <a  className="section1" href={pdf} >Resume </a>
            </div>
        </div>
    );
};