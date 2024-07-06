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
import "./HotelSuvidhaDeluxe.css";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import i1 from "../assets/i1.jpeg";
import i2 from "../assets/i2.jpeg";
import i9 from "../assets/i9.jpeg";

const HotelSuvidhaDeluxe = () => {
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
    <div className="hotel-suvidha-deluxe">
      <header className="header">
        <Carousel className="header-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={b1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 header-image"
              src={b2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="header-title">Hotel Suvidha Deluxe</h1>
      </header>

      <section className="content mb-5">
        <section className="about text-center">
          <h2>About Hotel Suvidha Deluxe</h2>
          <p>
            Welcome to Hotel Suvidha Deluxe, an esteemed hotel located in the
            heart of Haridwar, a city that embodies spirituality and
            tranquility. Our hotel is celebrated for its exceptional
            hospitality, luxurious accommodations, and prime location near the
            sacred river Ganga. Whether you're a pilgrim seeking spiritual
            solace or a tourist exploring the historical and cultural marvels of
            Haridwar, Hotel Suvidha Deluxe offers a serene and comfortable
            retreat.
          </p>
          <p>
            Our rooms are designed with meticulous attention to detail,
            providing a perfect blend of elegance and comfort. Each room is
            equipped with modern amenities, including high-speed WiFi, air
            conditioning, and 24/7 hot and cold water, ensuring a pleasant stay.
            Our dedicated staff is always ready to assist you, offering
            personalized service to meet your every need.
          </p>
          <p>
            At Hotel Suvidha Deluxe, we take pride in our diverse range of
            services and facilities. Our guests can enjoy seamless connectivity
            with our complimentary WiFi, secure parking, and an on-call doctor
            for any medical emergencies. The hotel also features a
            state-of-the-art gym, a multi-cuisine restaurant serving delectable
            dishes, and a cozy lounge where guests can unwind.
          </p>
          <p>
            Our strategic location provides easy access to Haridwar's prominent
            attractions. Just a short walk from the hotel, you can experience
            the divine Ganga Aarti at Har Ki Pauri, visit the revered Chandi
            Devi and Mansa Devi temples, and explore the bustling local markets.
            For those interested in adventure, the nearby Rajaji National Park
            offers thrilling wildlife safaris.
          </p>
          <p>
            We are committed to ensuring that your stay at Hotel Suvidha Deluxe
            is nothing short of exceptional. Our team goes above and beyond to
            create a welcoming atmosphere, making you feel at home away from
            home. Experience the perfect blend of traditional hospitality and
            contemporary luxury at Hotel Suvidha Deluxe, where every moment is
            crafted to make your stay unforgettable.
          </p>
        </section>
        <section className="services">
          <h2>Services and Amenities</h2>
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
          <h2>Room Fare Details</h2>
          <ul className="tariff-list">
            <li>Deluxe Room - Rs 1499+Taxes</li>
            <li>Luxury Room - Rs 2199+Taxes</li>
            <li>Family Room - Rs 4999+Taxes</li>
          </ul>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-images">
            <img src={i1} alt="Hotel View 1" onClick={() => handleShow(i1)} />
            <img src={i2} alt="Hotel View 2" onClick={() => handleShow(i2)} />
            <img src={i9} alt="Hotel View 3" onClick={() => handleShow(i9)} />
          </div>
        </section>
        <section className="location text-center">
          <h2>Location</h2>
          <p>
            Hotel Suvidha Deluxe is located at a prime spot in Haridwar, easily
            accessible and close to major attractions. The address is:
          </p>
          <p>
            Haridwar Railway Station Road, <br />
            Near Gulab Bagh, <br />
            Haridwar, Uttarakhand, India
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.125979116632!2d78.15644357555001!3d29.947054774972777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094798e1c9fe6b%3A0x6216743a56a37cd2!2sSuvidha%20Deluxe%20Haridwar!5e0!3m2!1sen!2sin!4v1720155475767!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen // Correct attribute name
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Correct attribute name
            title="Hotel Location"
          ></iframe>
        </section>
        <section className="contact p-8">
          
          <div className="contact-info-container flex flex-col lg:flex-row justify-between items-center lg:space-x-8 mb-8">
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMobileAlt className="contact-icon text-3xl mb-2" />
              <p className="text-center">Phone: +91-89410 00584</p>
            </div>
            <div className="contact-box flex flex-col items-center p-4 border border-gray-300 rounded w-full lg:w-auto mb-4 lg:mb-0">
              <FaMailBulk className="contact-icon text-3xl mb-2" />
              <p className="text-center">
                Email:{" "}
                <a
                  href="mailto:info@suvidhadeluxeharidwar.com"
                  className="text-blue-500"
                >
                  info@suvidhadeluxeharidwar.com
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

export default HotelSuvidhaDeluxe;
