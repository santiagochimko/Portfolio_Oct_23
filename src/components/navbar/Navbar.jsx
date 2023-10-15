import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.5}}
        >
          Santiago Chimko
        </motion.span>
        <div className="social">
          <a href="https://github.com/santiagochimko" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/scn93/" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://dribbble.com/SantiagoSCN" target="_blank" rel="noreferrer">
            <img src="/dribbble.png" alt="dribbble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
