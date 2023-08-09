import React from "react";
import Image1 from "../img/portfolio/a.png";
import Image2 from "../img/portfolio/b.png";
import Image3 from "../img/portfolio/c.png";
import Image4 from "../img/portfolio/d.png";
import Image5 from "../img/portfolio/e.png";
import Image6 from "../img/portfolio/f.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition1 from "../transitions";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, reiciendis voluptate <b>Iusto libero </b>
              voluptates, similique dolores laboriosam enim, architecto repellat
              exercitationem asperiores tenetur id praesentium natus accusamus.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              magni officiis alias tempore nihil iusto hic laboriosam fugit
              voluptates dolor.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          {/* <div className="grid grid-cols-2 lg:gap-2">
        
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image1}
                alt="a picture of an old kettle"
                className="object-cover h-full lg:h-[220px]  hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image2}
                alt="a picture of an old kettle"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image3}
                alt="a picture of an old kettle"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image4}
                alt="a picture of an old kettle"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 overflow-hidden">
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image1}
                alt=""
              />
            </div>
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image2}
                alt=""
              />
            </div>
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image3}
                alt=""
              />
            </div>
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image4}
                alt=""
              />
            </div>
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image5}
                alt=""
              />
            </div>
            <div className="bg-accent overflow-hidden max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[260px]">
              <img
                className="h-auto object-cover max-w-full"
                src={Image6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
