import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
];

const FooterLink = [
  {
    title: "Hotel Suvidha deluxe",
    link: "/suvidha",
  },
  {
    title: "Hotel Le Grace",
    link: "/grace",
  },
  {
    title: "Hotel King Plaza",
    link: "/king",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="flex flex-wrap py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="w-full md:w-1/4 py-8 px-4">
            <h1 className="text-xl sm:text-2xl font-bold">
              Uttarakhand Hotels 4 you
            </h1>
            <p className="text-sm mt-3">
              Embark on a journey to the tranquil allure of Haridwar and immerse
              yourself in a blissful retreat at our luxury accommodations.
              Experience unparalleled comfort amidst breathtaking landscapes,
              where every moment is a sanctuary of relaxation and rejuvenation.
              Discover the essence of serenity and hospitality in the heart of
              Haridwar with us.
            </p>
            <br />
            
          </div>
          <div className="w-full md:w-1/4 py-8 px-4">
          
            <h1 className="text-xl font-bold mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                >
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <FaLocationArrow />
              <p>
                Shiv Murti Chowk, Sharvan Nath Nagar, Haridwar, Uttarakhand
                249401
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91-8941000584</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 py-8 px-4">
            <h1 className="text-xl font-bold mb-3">Hotels</h1>
            <ul className="flex flex-col gap-3">
              {FooterLink.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                >
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 py-8 px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9319178869778!2d76.27042418211511!3d31.47105895351341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad07f5026d147%3A0x376817d32a6483e2!2sHotel%20Suvidha%20Palace!5e0!3m2!1sen!2sin!4v1719980045099!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
          &copy; 2024 All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
