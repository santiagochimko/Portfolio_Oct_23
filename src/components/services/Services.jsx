import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"      
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web development</h2>
          <p>
          Hello! I'm a junior full-stack developer with a strong passion for frontend development. I have a unique blend of skills, combining a solid foundation in UX/UI design with proficiency in web development. I love crafting engaging and user-centric web experiences, with React.js being my preferred tool for building dynamic interfaces. My skill set encompasses HTML, CSS, and JavaScript for frontend work. Although the backend is not my strong suit, I'm still comfortable with Node.js, APIs, and database management using PostgreSQL and MongoDB. I'm excited to continuously learn and contribute to projects that seamlessly blend design and development for exceptional user experiences.
          </p>
          
        </motion.div>        
      </motion.div>
    </motion.div>
  );
};

export default Services;