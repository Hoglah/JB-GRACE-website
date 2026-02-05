import React from "react";
import "./Services.css";
import { FaBeer, FaHammer, FaHome, FaUser } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services" className="container">
      <h1 className="title">Special Offer</h1>
      <h2 className="sub__heading">Our best services</h2>
      <hr />
      <div className="cards">
        <div className="service-card">
          <div className="icon">
            <FaHammer />
          </div>
          <div className="detail">
            <div className="service-title">Building Renovation</div>
            <div className="service-description">
              Kitchen & Bath Remodeling, Home Additions, Custom Builds, General
              Contracting, Historic Restoration, Refurbishment, Handyman
              Services.
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <MdConstruction />
          </div>
          <div className="detail">
            <div className="service-title">Construction Services</div>
            <div className="service-description">
              Structural Engineering, Concrete Foundation Installer, Roofing
              Contractor, Framing, Site Management, Pre-construction Services.
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaPencil />
          </div>
          <div className="detail">
            <div className="service-title">Design & Planning</div>
            <div className="service-description">
              Software used for drafting technical drawings. Developing the
              basic form, layout, and function. Refining the design, selecting
              materials, and finalizing layouts.
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaBeer />
          </div>
          <div className="detail">
            <div className="service-title">Documentation</div>
            <div className="service-description">
              Detailed written requirements for materials, standards, and
              workmanship. Defines the specific tasks and boundaries of the
              project.
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaHome />
          </div>
          <div className="detail">
            <div className="service-title">Interior Design</div>
            <div className="service-description">
              Arranging furniture and layouts for optimal flow and
              functionality. Digital 3D visualizations of what the finished
              space will look like
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaUser />
          </div>
          <div className="detail">
            <div className="service-title">Customer Support</div>
            <div className="service-description">
              Building your vision or Bringing your blueprints to life. Focuses
              on the client's goals.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
