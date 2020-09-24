import React from 'react'
import './project-card.css';

export const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <div className="project-card">
            <div>
                <p><b></b> {project.name}</p>
                <p><b>Description:</b> {project.description}</p>
                <p><b>Deployed Link:</b> <a href={project.DeployedLink}>{project.DeployedLink}</a> </p>
                <p><b>GitHub:</b> <a href={project.GitHub}>{project.GitHub}</a></p>
            </div>
            <div>
                <img src={project.image} width="100%"/>
            </div>


        </div>
    )
}