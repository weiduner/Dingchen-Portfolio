import "./summary.scss"
import {motion} from "framer-motion"

const textVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}
const scrollVariant = {
    initial: {
        y: 0,
        opacity: 1,
    },
    animate: {
        opacity: 0,
        y: 40,
        transition: {
          duration: 0.75,
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
}

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-51%",
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 10,
      },
    },
  };

const Summary = () => {
    
    

    return(
        <div className="summary">
            <motion.div 
                className="slidingTextContainer"
                variants = {sliderVariants} 
                initial="initial"
                animate="animate"
            >
                Dingchen Wei Dingchen Wei 
            </motion.div>


            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants = {textVariant} 
                    initial="initial"
                    animate="animate"
                >
                    
                    <motion.h1 variants = {textVariant}>Hi, I'm Dingchen</motion.h1>
                    <motion.h2 variants = {textVariant}>
                        I'm a results-oriented Software Engineer with with proficent skills in full-stack developing. Reach out if you'd like to learn more!
                    </motion.h2>
                    <motion.div className="buttons">
                        <motion.a 
                            href={`#Project`} 
                            variants = {textVariant}
                        >
                        See my projects
                        </motion.a>
                        <motion.a 
                            href={`#Contact`} 
                            variants = {textVariant}
                        >
                        contact me
                        </motion.a>
                    </motion.div>
                    
                </motion.div>
            </div>

            

            <div className="imageContainer">
                <center><img src="Dingchen.png" alt=""/></center>
            </div>

            <motion.div 
                className="nextPage"
                variants = {scrollVariant} 
                initial="initial"
                animate="animate"
            >
                <img variants = {textVariant} src="scroll.png" alt=""/>
            </motion.div>
            
            
        </div>
    )
}



export default Summary;