import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="hero"></a>
      <div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Subodh.
          </span>
          {/* <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span> */}
        </div>

        <div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <img variants={slideIn("up", "tween", 0.2, 1)} src="./person.png" alt="" />
        </div>

        <a className={css.email} href="mailto:subodhjajee123@gmail.com">
          subodhjajee123@gmail.com
        </a>

        <div className={css.lowerElements}>
          <div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            {/* <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div> */}
          </div>

          <div variants={fadeIn("left", "tween", 0.2, 1)} className={css.certificate}>
            <a target="_blank" href="https://drive.google.com/file/d/1ylGFiygJpEdTEe9Imrx7EBefcjXpFdMB/view?usp=share_link"><img src="./down.jpg" alt="" /></a>
            <a target="_blank" href="https://github.com/apoc4080"><img src="./certificate.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/subodh-jajee-342817108/"><img src="./certificate2.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
