import {delay, motion} from "framer-motion"
import "./sidebar.scss"
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";
import { useState } from "react";



const Sidebar = () => {;
    const [isHovered,setIsHovered] = useState(false)
    
    const variants = {
        open:{
            clipPath: "circle(2800px at 50px 50px)",
            transition: {
                type:"spring",
                stiffness: 20, // changeable
    
    
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.3,
                type:"spring",
                stiffness: 400, // changeable
                damping: 40, // changeable
    
            }
        }
    }

    return(
        <motion.div className="sidebar" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={isHovered ? "open" : "closed"}
            >
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setIsHovered={setIsHovered}/>
        </motion.div>
    )
}


//     return (
//         <motion.div className="sidebar" animate={open ? "open" : "closed"}>
//             <motion.div className="bg" variants={variants}>
//                 <Links/>
//             </motion.div>
//             <ToggleButton setOpen = {setOpen}/>
//         </motion.div>
//     );
// };



export default Sidebar;