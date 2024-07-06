import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";

import axios from "axios";
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
import "./HotelKingPlaza.css";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";
import k5 from "../assets/k5.jpg";

const HotelKingPlaza = () => {
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
      const res = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      if (res.data.success) {
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
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="hotel-king-Plaza">
      <header className="header">
        <Carousel className="header-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={k5}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={k2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="header-title bold-heading">Hotel King Plaza</h1>
      </header>

      <section className="content mb-5">
        <section className="about text-center text-bold">
          <h2 className="bold-heading">About Hotel King Plaza</h2>
          <p>
            Welcome to Hotel King Plaza, a luxurious retreat located in the
            heart of Haridwar. Nestled amidst serene surroundings, our hotel
            offers unparalleled comfort and convenience, making it an ideal
            choice for both leisure and business travelers.
          </p>
          <p>
            Experience the epitome of hospitality with our well-appointed rooms
            equipped with modern amenities, including high-speed WiFi, air
            conditioning, and 24/7 hot and cold water. Our dedicated staff
            ensures that every guest enjoys a memorable stay with personalized
            services.
          </p>
          <p>
            Indulge in a range of services and facilities designed to enhance
            your experience. From complimentary WiFi and secure parking to a
            fitness center and a multi-cuisine restaurant, we cater to your
            every need. Whether you're here for spiritual rejuvenation or
            exploring Haridwar's cultural heritage, Hotel King Plaza promises a
            relaxing and enjoyable stay.
          </p>
          <p>
            Conveniently located near Haridwar's major attractions, including
            the sacred Ganga Aarti at Har Ki Pauri and the historic Chandi Devi
            and Mansa Devi temples, Hotel King Plaza offers easy access to all
            the city has to offer.
          </p>
          <p>
            Embrace luxury and comfort at Hotel King Plaza, where hospitality
            meets elegance to create unforgettable memories.
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
            <li>Deluxe Room - Rs 2810+Taxes</li>
            <li>AC Deluxe Room - Rs 4109+Taxes</li>
          </ul>
        </section>

        <section className="gallery">
          <h2 className="bold-heading">Gallery</h2>
          <div className="gallery-images">
            <img src={k3} alt="Hotel View 1" onClick={() => handleShow(k3)} />
            <img src={k4} alt="Hotel View 2" onClick={() => handleShow(k4)} />
            <img src={k1} alt="Hotel View 3" onClick={() => handleShow(k1)} />
          </div>
        </section>

        <section className="location text-center">
          <h2 className="bold-heading">Location</h2>
          <p>
            Hotel King Plaza is located centrally in Haridwar, offering easy
            accessibility to all major attractions. The address is:
          </p>
          <p>
            Niranjani Akhara Marg
            <br />
            Sharvan Nath Nagar
            <br />
            Haridwar, Uttarakhand 249401
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.111808370013!2d78.15729431061318!3d29.94746242305574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094701c9df643f%3A0x6f36c73872a44a0f!2sKing%20Plaza!5e0!3m2!1sen!2sin!4v1720163860092!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          ></iframe>
        </section>

        <section className="contact p-8">
          {/* Contact Information Section */}
          <div className="contact-info-container flex flex-col lg:flex-row justify-between items-center lg:space-x-8 mb-8">
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMobileAlt className="contact-icon text-3xl mb-2" />
              <p className="text-center">Phone: 01334220653</p>
            </div>
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMailBulk className="contact-icon text-3xl mb-2" />
              <p className="text-center">
                Email:{" "}
                <a
                  href="mailto:info@uttarakhandhotels4U.com"
                  className="text-blue-500"
                >
                  info@uttarakhandhotels4U.com
                </a>
              </p>
            </div>
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto">
              <FaAddressCard className="contact-icon text-3xl mb-2" />
              <p className="text-center">
                Address: Haridwar, Uttarakhand, India
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

export default HotelKingPlaza;
