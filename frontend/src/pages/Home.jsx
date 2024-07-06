import React from "react";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import HotelInfoSection from "../components/hotelinfo/HotelInfoSection";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import img from "../assets/1.jpg";

// Importing icons
import {
  RiWifiLine,
  RiParkingLine,
  RiWaterFlashLine,
  RiStethoscopeLine,
  RiRemoteControl2Line,
  RiHotelBedLine,
  RiTaxiWifiLine,
} from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const hotels = [
    {
      name: "Hotel Suvidha Deluxe",
      description: "Experience unparalleled comfort and luxury.",
      services: [
        "Free Wi-Fi",
        "24/7 Room Service",
        "Conference Hall",
        "Free Breakfast",
        "City Tour",
        "Airport Shuttle",
       
      ],
    },
    {
      name: "Hotel King Plaza",
      description: "A perfect place for your business meetings.",
      services: [
        "Free Wi-Fi",
        "24/7 Room Service",
        "Conference Hall",
        "Free Breakfast",
        "City Tour",
        "Airport Shuttle",
      ],
    },
    {
      name: "Hotel Le Grace",
      description: "Elegant rooms with a stunning city view.",
      services: [
        "Free Wi-Fi",
        "24/7 Room Service",

        "Conference Hall",
        "Free Breakfast",
    
        "City Tour",
        "Airport Shuttle",
     
      ],
    },
  ];

  // Object to map service names to icons
  const amenityIcons = {
    "Free Wi-Fi": <RiWifiLine size={30} />,
    "24/7 Room Service": <RiStethoscopeLine size={30} />,
    
    "Conference Hall": <RiRemoteControl2Line size={30} />,
    "Free Breakfast": <RiHotelBedLine size={30} />,
  
    "City Tour": <RiParkingLine size={30} />,
    "Airport Shuttle": <RiTaxiWifiLine size={30} />,

  };

  return (
    <>
      <div className="relative h-screen">
        <img
          src={img}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      <Places handleOrderPopup={handleOrderPopup} />
      <HotelInfoSection hotels={hotels} amenityIcons={amenityIcons} />
      <BlogsComp />
      <Banner />
      <Testimonial />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Home;
