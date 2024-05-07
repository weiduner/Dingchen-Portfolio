import "./projectCard.scss"
import { motion,useInView } from "framer-motion"
import {useRef,useState} from "react";

const ProjectCard = ( {details} ) => {
    return (
        <div className="projectCard">
            <div className="title">
                <p>{details.title}</p>
            </div>
            <div className="content">
                <div className="skills">
                    {details.skills.map((skill)=>(
                        <div className="skill" key={skill}>{skill}</div>
                    ))}
                </div>
                <div className="description">{details.description}</div>
                <div className="buttons">
                    <a href={details.demoSrc} target="_blank">View Demo</a>
                    <a href={details.codeSrc} target="_blank">Source Code</a>
                </div>
              
            </div>
            
        </div>
    )
}

export default ProjectCard;