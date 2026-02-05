import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="left-contact">
          <div className="heading">
            <h1 className="title">Contact Us</h1>
          </div>
          <div className="sub__heading">
            <h2>Reach Us For More Query</h2>
          </div>
          <hr />
          <div className="sub__text">
            <p>
              Have a project in mind or need expert advice? We're here to help!
              Reach out to our team for personalized consultations, inquiries,
              or to start your next big project today.
            </p>
          </div>
        </div>
        <div className="right-contact">
          <form action="" className="form">
            <div className="form__middle">
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                className="control"
              />
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phoneNumber"
                className="control"
              />
              <textarea
                name="message"
                placeholder="Your message"
                className="control"
              ></textarea>
            </div>
            <div className="form__bottom">
              <button type="button" className="btn primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
