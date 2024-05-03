import {motion} from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.5}}
                >
                    Portfolio
                </motion.span>
                <div className="social">
                    <a href="#Contact"><img src="/email.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/dingchen-wei-1342a9244" target="_blank"><img src="/linkedIn.png" alt=""/></a>
                    <a href="https://github.com/weiduner" target="_blank"><img src="/github.png" alt=""/></a>
                    <a href="https://www.facebook.com/tony.wei.1420" target="_blank"><img src="/facebook.png" alt=""/></a>
                </div>
            </div>

        </div>
    );
};


export default Navbar;