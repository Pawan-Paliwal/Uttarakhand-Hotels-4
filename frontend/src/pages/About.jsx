import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import HotelSuvidhaImage from "../assets/hotel1.jpg";
import HotelLeGraceImage from "../assets/hotel3.jpg";
import HotelKingPlazaImage from "../assets/hotel5.jpg";
import Places from "../components/Places/Places";
import { CiWifiOn } from "react-icons/ci";
import { TbParkingCircle, TbAirConditioning } from "react-icons/tb";
import { FaShower, FaDesktop } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { PiTaxi } from "react-icons/pi";

const About = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="container pt-14">
        {/* Section 1: About Us */}
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          <div className="space-y-8">
            {/* Hotel Suvidha Deluxe */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-1">
                <img
                  src={HotelSuvidhaImage}
                  alt="Hotel Suvidha Deluxe"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">
                  Hotel Suvidha Deluxe
                </h2>
                <p className="text-gray-700">
                  Hotel Suvidha Deluxe offers a comfortable stay with modern
                  amenities, ensuring a pleasant experience for all guests. Our
                  services include WiFi connectivity, parking, air conditioning,
                  and more. Guests can enjoy a serene ambiance, complemented by
                  our courteous staff who are always ready to assist. Our rooms
                  are spacious and well-furnished, providing a perfect blend of
                  comfort and luxury. Additionally, we offer a variety of dining
                  options to cater to different tastes, making your stay not
                  just comfortable but also memorable. Whether you're here for
                  business or leisure, Hotel Suvidha Deluxe ensures a seamless
                  experience with all the conveniences you need.
                </p>
              </div>
            </div>
            {/* Hotel Le Grace */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">Hotel Le Grace</h2>
                <p className="text-gray-700">
                  Hotel Le Grace provides a luxurious stay with top-notch
                  facilities, including 24/7 hot & cold water, doctor on call,
                  cable TV, and comfortable bedrooms. Our hotel is designed to
                  offer a serene and sophisticated environment, perfect for
                  relaxation and rejuvenation. Each room is elegantly furnished
                  with modern décor and premium bedding to ensure a restful
                  sleep. Guests can enjoy a variety of on-site dining options,
                  serving delicious cuisine made from fresh, local ingredients.
                  Additionally, our dedicated staff is always on hand to provide
                  personalized service, making sure every need is met with
                  utmost care and attention.
                </p>
              </div>
              <div className="col-span-1 md:col-span-1">
                <img
                  src={HotelLeGraceImage}
                  alt="Hotel Le Grace"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            {/* Hotel King Plaza */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-1">
                <img
                  src={HotelKingPlazaImage}
                  alt="Hotel King Plaza"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">Hotel King Plaza</h2>
                <p className="text-gray-700">
                  Hotel King Plaza is known for its exceptional services,
                  including taxi services, and a prime location. Experience a
                  memorable stay with us. Our hotel features well-appointed
                  rooms with modern amenities to ensure your comfort. Guests can
                  relax in our cozy lounge area or explore the nearby
                  attractions with ease. We take pride in our attentive staff,
                  who are dedicated to making your stay as enjoyable as
                  possible. Whether you're here for business or leisure, our
                  hotel offers a blend of convenience and luxury, with easy
                  access to shopping, dining, and entertainment options.
                  Discover the perfect retreat at Hotel King Plaza, where your
                  satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Facilities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Hotel Suvidha Deluxe */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Hotel Suvidha Deluxe</h2>
              <ul className="list-disc list-inside pl-4 text-gray-700">
                <li className="flex items-center mb-2">
                  <CiWifiOn className="mr-2" /> WiFi Connectivity
                </li>
                <li className="flex items-center mb-2">
                  <TbParkingCircle className="mr-2" /> Parking
                </li>
                <li className="flex items-center mb-2">
                  <TbAirConditioning className="mr-2" /> Air Conditioning
                </li>
                <li className="flex items-center mb-2">
                  <FaShower className="mr-2" /> 24/7 Hot & Cold Water
                </li>
                <li className="flex items-center mb-2">
                  <FaUserDoctor className="mr-2" /> Doctor On Call
                </li>
                <li className="flex items-center mb-2">
                  <FaDesktop className="mr-2" /> Cable TV
                </li>
                <li className="flex items-center mb-2">
                  <MdOutlineBedroomParent className="mr-2" /> Bedrooms
                </li>
                <li className="flex items-center mb-2">
                  <PiTaxi className="mr-2" /> Taxi Services
                </li>
              </ul>
            </div>

            {/* Le Grace */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Le Grace</h2>
              <ul className="list-disc list-inside pl-4 text-gray-700">
                <li className="flex items-center mb-2">
                  <CiWifiOn className="mr-2" /> WiFi Connectivity
                </li>
                <li className="flex items-center mb-2">
                  <TbParkingCircle className="mr-2" /> Parking
                </li>
                <li className="flex items-center mb-2">
                  <TbAirConditioning className="mr-2" /> Air Conditioning
                </li>
                <li className="flex items-center mb-2">
                  <FaShower className="mr-2" /> 24/7 Hot & Cold Water
                </li>
                <li className="flex items-center mb-2">
                  <FaUserDoctor className="mr-2" /> Doctor On Call
                </li>
                <li className="flex items-center mb-2">
                  <FaDesktop className="mr-2" /> Cable TV
                </li>
                <li className="flex items-center mb-2">
                  <MdOutlineBedroomParent className="mr-2" /> Bedrooms
                </li>
                <li className="flex items-center mb-2">
                  <PiTaxi className="mr-2" /> Taxi Services
                </li>
              </ul>
            </div>

            {/* King Plaza */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">King Plaza</h2>
              <ul className="list-disc list-inside pl-4 text-gray-700">
                <li className="flex items-center mb-2">
                  <CiWifiOn className="mr-2" /> WiFi Connectivity
                </li>
                <li className="flex items-center mb-2">
                  <TbParkingCircle className="mr-2" /> Parking
                </li>
                <li className="flex items-center mb-2">
                  <TbAirConditioning className="mr-2" /> Air Conditioning
                </li>
                <li className="flex items-center mb-2">
                  <FaShower className="mr-2" /> 24/7 Hot & Cold Water
                </li>
                <li className="flex items-center mb-2">
                  <FaUserDoctor className="mr-2" /> Doctor On Call
                </li>
                <li className="flex items-center mb-2">
                  <FaDesktop className="mr-2" /> Cable TV
                </li>
                <li className="flex items-center mb-2">
                  <MdOutlineBedroomParent className="mr-2" /> Bedrooms
                </li>
                <li className="flex items-center mb-2">
                  <PiTaxi className="mr-2" /> Taxi Services
                </li>
              </ul>
            </div>
          </div>
        </div>

        <BlogsComp />
      </div>
    </>
  );
};

export default About;
