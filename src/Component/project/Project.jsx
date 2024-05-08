import "./project.scss"
import { motion,useInView } from "framer-motion"
import {useRef,useState} from "react";
import ProjectCard from "./projectCard/ProjectCard";
import { allProjects } from "../../../data.ts";

const Project = () => {
    const projectContainerRef = useRef(null);

    return (
        <div className="projectContainer" >
            <div className="projectContentContainer" ref={projectContainerRef}>
{/*                 
                <div className="arrow-right">
                    <img src="left.png" alt=""/>
                </div>
                <div className="arrow-left" >
                    <img src="left.png" alt="" />
                </div> */}
                <div className="projectContent">
                    {allProjects.map((item) => (
                        <ProjectCard key={item.title} details={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;