import { useRef } from "react"
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"





const Parallax = ({type}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start end", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0,1], ["-1000%", "1000%"])
    const yBg = useTransform(scrollYProgress, [0,1], ["-100%", "100%"])
    const xBg = useTransform(scrollYProgress, [0,1], ["-25%", "25%"])
    return (
        <div className="parallax" 
            ref = {ref}
            style={{background: 
                type==="work"? 
                    "linear-gradient(180deg, #111132, #0c0c1d)"
                    :"linear-gradient(180deg, #111132, #505064)"
                }}
        >
            <motion.h1 
                style={{y:yText}}>
                {type==="work" ? "EXPERIENCE": "PROJECTS"}
            </motion.h1>
            <motion.div className="mountains" ></motion.div>
            <motion.div 
                className="planets" 
                style={{
                    y:yBg,
                    backgroundImage: `url(${type==="work" ? "/planets.png": "/sun.png"})`
                }}
            ></motion.div>
            <motion.div className="starsContainer" style={{x:xBg}}>
                <img src="/stars.png" alt=""/>
                <img src="/stars.png" alt=""/>
            </motion.div>
            
        </div>
    )
}


export default Parallax;