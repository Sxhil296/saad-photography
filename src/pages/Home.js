import React from "react";
// import Header from '../components/Header';
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition1 from "../transitions";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative min-h-[100vh]">
        {/* text and img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center"
          >
            <h1 className="h1">
              photographer <br />& film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4">
              Los Angeles, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire Me
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt="picture of a woman holding camera"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
