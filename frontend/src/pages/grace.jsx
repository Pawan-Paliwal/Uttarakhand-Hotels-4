import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import {
  FaWifi,
  FaParking,
  FaSnowflake,
  FaShower,
  FaUserMd,
  FaTv,
  FaBed,
  FaTaxi,
  FaMobileAlt,
  FaMailBulk,
  FaAddressCard,
} from "react-icons/fa";
import "./HotelLeGrace.css";
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import q3 from "../assets/q3.jpg";
import q4 from "../assets/q4.jpg";
import q5 from "../assets/q5.jpg";

const HotelLeGrace = () => {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        console.log("Email sent successfully!");
        // Reset form fields after successful submission
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } else {
        console.log("Failed to send email.");
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };
  return (
    <div className="hotel-le-grace">
      <header className="header">
        <Carousel className="header-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={q1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={q2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="header-title">Hotel Le Grace</h1>
      </header>

      <section className="content mb-5">
        <section className="about text-center">
          <h2 className="bold-heading">About Hotel Le Grace</h2>
          <p>
            Welcome to Hotel Le Grace, a prestigious establishment nestled in
            the heart of Haridwar, offering a blend of elegance and tranquility.
            Whether you're visiting for spiritual rejuvenation or exploring the
            cultural heritage of Haridwar, Hotel Le Grace promises a serene
            retreat.
          </p>
          <p>
            Our rooms are designed to provide utmost comfort and luxury,
            equipped with modern amenities including high-speed WiFi, air
            conditioning, and round-the-clock hot and cold water. Our dedicated
            staff is committed to ensuring a memorable stay with personalized
            service.
          </p>
          <p>
            Hotel Le Grace boasts a range of services and facilities to enhance
            your stay, including complimentary WiFi, secure parking, a gym, a
            multi-cuisine restaurant, and a cozy lounge area.
          </p>
          <p>
            Conveniently located, Hotel Le Grace offers easy access to
            Haridwar's major attractions. Experience the spiritual fervor of the
            Ganga Aarti at Har Ki Pauri, visit the historic Chandi Devi and
            Mansa Devi temples, or explore the wildlife at Rajaji National Park.
          </p>
          <p>
            Embrace traditional hospitality combined with contemporary comforts
            at Hotel Le Grace, where every moment is crafted to exceed your
            expectations.
          </p>
        </section>

        <section className="services">
          <h2 className="bold-heading">Services and Amenities</h2>
          <ul className="services-list">
            <li>
              <FaWifi /> WiFi Connectivity
            </li>
            <li>
              <FaParking /> Parking
            </li>
            <li>
              <FaSnowflake /> Air Conditioning
            </li>
            <li>
              <FaShower /> 24/7 Hot & Cold Water
            </li>
            <li>
              <FaUserMd /> Doctor On Call
            </li>
            <li>
              <FaTv /> Cable TV
            </li>
            <li>
              <FaBed /> Comfortable Bedrooms
            </li>
            <li>
              <FaTaxi /> Taxi Services
            </li>
          </ul>
        </section>

        <section className="tariff">
          <h2 className="bold-heading">Room Fare Details</h2>
          <ul className="tariff-list">
            <li>Deluxe Room - Rs 7000+Taxes</li>
            <li>Super Deluxe Room - Rs 7500+Taxes</li>
            <li>Family Room - Rs 8500+Taxes</li>
          </ul>
        </section>

        <section className="gallery">
          <h2 className="bold-heading">Gallery</h2>
          <div className="gallery-images">
            <img
              src={q3}
              alt="Hotel View 1"
              onClick={() => handleOpenModal(q3)}
            />
            <img
              src={q4}
              alt="Hotel View 2"
              onClick={() => handleOpenModal(q4)}
            />
            <img
              src={q5}
              alt="Hotel View 3"
              onClick={() => handleOpenModal(q5)}
            />
          </div>
        </section>

        <section className="location text-center">
          <h2 className="bold-heading">Location</h2>
          <p>
            Hotel Le Grace is located at a prime spot in Haridwar, easily
            accessible and close to major attractions. The address is:
          </p>
          <p>
            Devpura
            <br />
            Haridwar, Uttarakhand, India
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.1276963577175!2d78.15679637555002!3d29.947005374972793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947beca05fba3%3A0x3c8f394ac2615fea!2sHotel%20Le%20Grace!5e0!3m2!1sen!2sin!4v1720160712139!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          ></iframe>
        </section>

        
        <section className="contact p-8">
          
          <div className="contact-info-container flex flex-col lg:flex-row justify-between items-center lg:space-x-8 mb-8">
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMobileAlt className="contact-icon text-3xl mb-2" />
              <p className="text-center">Phone: +91- 8941000584</p>
            </div>
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMailBulk className="contact-icon text-3xl mb-2" />
              <p className="text-center">
                Email:{" "}
                <a
                  href="mailto:info@hotellegrace.com"
                  className="text-blue-500"
                >
                  info@hotellegrace.com
                </a>
              </p>
            </div>
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto">
              <FaAddressCard className="contact-icon text-3xl mb-2" />
              <p className="text-center">
                Address:Devpura, Haridwar, Uttarakhand 249401
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-container">
            <h2 className="bold-heading text-2xl mb-4">Send Us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit p-2 bg-blue-500 text-white rounded"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HotelLeGrace;