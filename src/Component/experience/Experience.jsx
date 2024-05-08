import "./experience.scss"
import { useState } from "react";
import { allWorks as works } from "../../../data.ts";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () =>{

    const [selectedWork, setselectedWork] = useState(works[0]);


    return(
        <div className="experience">
            <div className="windowContainer">
                <nav><ul>
                    {works.map((work) => (
                        <li
                            key={work.name}
                            className={work === selectedWork ? "selected" : ""}
                            onClick={() => setselectedWork(work)}
                        >
                        
                        <div className="icon">{<img src={work.icon} alt=""/>}</div>
                        <div className="title">{`${work.name}`}</div>
                        <div className="divider"></div>
                        </li>
                    ))}
                </ul></nav>
                <main>
                    <AnimatePresence mode="wait">
                    <motion.div className = "page"
                        key={selectedWork ? selectedWork.name : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                    <div className="title">
                        <div className="jobTitle">
                            {selectedWork ? selectedWork.title : ""}
                        </div>
                        <div className="info">
                            <div className="companyName">
                                {selectedWork ? selectedWork.name : ""}
                            </div>
                            <div className="duration">
                                {selectedWork ? selectedWork.start : ""}-{selectedWork ? selectedWork.end : ""}
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        {selectedWork ? <div className="skillContainer">
                            {selectedWork.skills.map((skill,id) => {return (
                                <div key={id} className="skill">
                                    <div className="imageContainer">
                                        <img src={skill.imageSrc} alt=""/>
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            )})}
                        </div> : <h1>choose a work experience to look at</h1>}
                        <div className="textContainer">
                            
                            {selectedWork ? <ul className="description">
                                {selectedWork.descriptions.map((description,id) => {return (
                                    <li key={id}>
                                        {`${description}`}
                                    </li>
                                )})}
                            </ul> : <p>choose a work experience to look at</p>}
                        </div>
                    </div>
                    
                    </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};



export default Experience