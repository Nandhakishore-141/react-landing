import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Travel Finder</h1>
        <p>
          Travel Finder is a modern software company focused on creating
          high-quality web and mobile applications. Founded in 2018, we aim
          to deliver innovative digital solutions globally.
        </p>

        <h2>Company Details</h2>
        <ul>
          <li><strong>Founded:</strong> January 15, 2018</li>
          <li><strong>Founders:</strong> Arjun Mehta & Priya Nair</li>
          <li><strong>Employees:</strong> 120+</li>
          <li><strong>Headquarters:</strong> Bengaluru, India</li>
          <li><strong>Services:</strong> Web Development, AI Solutions, Cloud Integration</li>
        </ul>

        <h2>Founders</h2>
        <div className="founders">
          <div className="founder">
            <p><strong>Arjun Mehta</strong> - CEO & Co-Founder</p>
          </div>
          <div className="founder">
            <p><strong>Priya Nair</strong> - CTO & Co-Founder</p>
          </div>
        </div>

        <h2>Contact</h2>
        <p>Email: contact@novatech.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Website: www.novatech.com</p>
      </div>
    </div>
  );
};

export default AboutPage;
