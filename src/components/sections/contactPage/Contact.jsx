import React, { useState } from "react";
import { Headphones, MessageSquare, Phone, MapPin } from "lucide-react";
import "./Contact.css";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    reason: "",
    acknowledged: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="icon-circle">
          <Headphones className="icon" />
        </div>
        <h1>Contact Support</h1>
        <p>Contact us regarding any concerns or inquiries.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="uppercase-title">WE ARE HERE FOR YOU</h2>
          <h3>Get In Touch With Us</h3>

          <div className="contact-methods">
            <div className="contact-method">
              <MessageSquare className="method-icon" />
              <div className="method-details">
                <h4>Chat to us</h4>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:hi@rootlabs.com">hi@rootlabs.com</a>
              </div>
            </div>

            <div className="contact-method">
              <Phone className="method-icon" />
              <div className="method-details">
                <h4>Phone</h4>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+918130010331">+91 81300 10331</a>
              </div>
            </div>

            <div className="contact-method">
              <MapPin className="method-icon" />
              <div className="method-details">
                <h4>Office</h4>
                <p>Come say hello at our office HQ.</p>
                <button className="text-link">Get Directions</button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>
                Full name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please Enter Your Email"
              />
            </div>

            <div className="form-row">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Please Select Your State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>

              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="">Please Select Your City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
              </select>
            </div>
            <div className="box">
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason for Contact..."
                rows={4}
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="acknowledged"
                checked={formData.acknowledged}
                onChange={handleChange}
                required
              />
              <label>
                I acknowledge that I have read, understood, and agree to abide
                by the terms and conditions and privacy policy outlined by the
                website.
              </label>
            </div>

            <button type="submit" className="submit-button">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;