import React from "react";
import hero from "../../assets/hero 2.png";
import "./Hero.css";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="left">
          <div className="heading">
            <h1 className="title">We Are Builders</h1>
          </div>
          <div className="sub__heading">
            <h2>We Will Build Your Dreams</h2>
          </div>
          <hr />
          <div className="description">
            We are dedictated to delivering top-quality services with a focus on
            innovation, sustainability, and client satisfaction. With over 5
            years experience, we bring expertise and precision to every project,
            helping shape the future through excellence in design and
            craftmanship.
          </div>
          <div className="buttons__wrapper">
            <Link to="portfolio" smooth={true} className="btn">
              Projects <FaArrowTurnDown />
            </Link>
            <Link to="contact" smooth={true} className="btn primary">
              Reach Us <FaArrowTurnDown />
            </Link>
          </div>
        </div>
        <div className="right hero__image-container object__contain">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
