import "./contact.scss"
import {motion,useInView} from "framer-motion"
import {useRef,useState} from "react";
import emailjs from '@emailjs/browser';
const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1,
        },
    }
}




const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_23cge09', 'template_7weuwtg', formRef.current, {
          publicKey: 'KHZJhec_Eknb96zI7',
        })
        .then(
          () => {
            setSuccess(true);
          },
          (error) => {
            setError(true);
          },
        );
    };
    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div 
            className="contact"
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item"  variants={variants}>
                    <motion.h2>Mail</motion.h2>
                    <motion.span>weiduner@icloud.com</motion.span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <motion.h2>Phone</motion.h2>
                    <motion.span>+1 (236) 512-6169</motion.span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <motion.h2>Address</motion.h2>
                    <motion.span>6090 Iona Dr, Vancouver, BC, CA</motion.span>
                </motion.div>
            </motion.div>
            <div className="formContainer" >
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                        <motion.path
                            strokeWidth={0.2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d=
                            "M 0 4 L 0 17 L 20 17 L 20 4 L 0 4 z M 1.6621094 5 L 18.337891 5 L 10.376953 11 L 9.6230469 11 L 1.6621094 5 z M 1 5.9335938 L 9.0488281 12 L 10.951172 12 L 19 5.9335938 L 19 15.246094 L 13.533203 11.128906 L 13.53125 11.126953 L 12.701172 11.751953 L 12.703125 11.753906 L 18.337891 16 L 1.6621094 16 L 7.296875 11.753906 L 7.2988281 11.751953 L 6.46875 11.126953 L 6.4667969 11.128906 L 1 15.246094 L 1 5.9335938 z"
                            />
                    </svg>
                </motion.div>

            
                <motion.form 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    ref={formRef}
                    onSubmit={sendEmail}
                >
                    <input type="text" required name="from_name" placeholder="Name"/>
                    <input type="text" required name="from_email" placeholder="Email"/>
                    <textarea rows={6} name="message" placeholder="Message"/>
                    <button value="Send">Summit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact