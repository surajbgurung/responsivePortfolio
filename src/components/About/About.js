import React from 'react';

import './about.css';

export const About = ({ bio }) => {
    return (
        <div className="about-container" style={{textAlign:'justify'}}>
            <p>{bio}</p>
        </div>
    )
}