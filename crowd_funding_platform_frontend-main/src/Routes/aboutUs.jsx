import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          At Crowdfund, we believe that every great idea deserves a chance to thrive. 
          Our platform connects visionary entrepreneurs, creative artists, and passionate
           changemakers with the supporters who believe in them.
          <br />
          <br />
          We aim to empower innovation by providing an easy-to-use, transparent,
           and secure space for fundraising. Whether you're launching a startup, funding
            a creative project, or supporting a social cause, we give you the tools to 
            turn your vision into reality.
          <br />
          
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
