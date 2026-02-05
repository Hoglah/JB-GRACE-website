import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import { FaArrowTurnDown } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="left-about">
        <div className="heading">
          <h1 className="title">Welcome To</h1>
        </div>
        <div className="sub__heading">
          <h2>J.B & Grace Limited</h2>
        </div>
        <hr />
        <div className="sub__text">
          <p>
            We are the leader with 5 years of experience in the construction
            market !
          </p>
        </div>
      </div>
      <div className="right-about">
        <p className="description">
          At <b>J.B & Grace,</b> we turn your ideas into reality with expert
          craftsmanship and innovative solutions. From concept to completion,
          we're dedicated to creating spaces that inspire and stand the test of
          time. Let's build a future you can be proud of. Our mission is to
          build lasting spaces taht inspire and uplift,combining quality
          craftmanship with innovative solutions to meet the evolving needs of
          our clients and communities. Ready to bring your vision to life? Our
          expert team offers personalized consultations to guide you through
          every step-from design to budget and beyond. Let's lay the groundwork
          for your next big project. Schedule your consultation today! Explore
          our portfolio to see how we turn visions into high-quality, inspiring
          spaces, from luxury homes to commercial buildings.
        </p>
        <Link to="portfolio" smooth={true} className="btn primary">
          Projects <FaArrowTurnDown />
        </Link>
      </div>
    </section>
  );
};

export default About;
