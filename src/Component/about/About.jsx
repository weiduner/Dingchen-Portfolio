import "./about.scss"
import { motion,useInView } from "framer-motion"
import {useRef,useState} from "react";

const About = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    const variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <div className="about">
            <motion.div className="aboutContent"
                variants={variants}
                initial="initial"
                whileInView="animate"

            >
                <div className="imageContainer">
                    <img className="aboutImg" src="Dingchen.png" alt=""/>
                </div>
                <ul className="aboutItems">
                    <motion.li className="aboutItem"
                        whileHover={{backgroundSize: "100% 100%", scale: 1.2}}
                        variants={variants}
                    >
                        <img src="frontend.png" alt=""/>
                        <div className="textContainer">
                            <h3>Frontend Developing</h3>
                            <p>Experienced in designing and building responsive and animative sites</p>
                        </div>
                    </motion.li>
                    <motion.li className="aboutItem"
                        whileHover={{backgroundSize: "100% 100%", scale: 1.2}}
                        variants={variants}
                    >
                        <img src="backend.png" alt=""/>
                        <div className="textContainer">
                            <h3>Backend Developing</h3>
                            <p>Developed fast and optimised back-end systems and APIs</p>
                        </div>
                    </motion.li>
                    <motion.li className="aboutItem"
                        whileHover={{backgroundSize: "100% 100%", scale: 1.2}}
                        variants={variants}
                    >
                        <img src="bug.png" alt=""/>
                        <div className="textContainer">
                            <h3>Software Engineer in Testing</h3>
                            <p>Designed test plans and scripted automation testing cases for various services</p>
                        </div>
                    </motion.li>
                </ul>
            </motion.div>
        </div>
    );
};


export default About;