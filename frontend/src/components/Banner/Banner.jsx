import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdOutlineLocalHotel } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoWifiOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100 mb-5">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div data-aos="flip-up">
              <img
                src={TravelImg}
                alt="Hotel in Haridwar"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px 5px 12px rgba(0,0,0,0.7)] object-cover rounded-lg"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold"
              >
                Experience Luxury Stay in Haridwar
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8"
              >
                Embark on a journey to the tranquil allure of Haridwar and immerse yourself in a blissful retreat at our luxury accommodations. Experience unparalleled comfort amidst breathtaking landscapes, where every moment is a sanctuary of relaxation and rejuvenation. Discover the essence of serenity and hospitality in the heart of Haridwar with us.
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Luxury Rooms</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoWifiOutline className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>High-Speed Wi-fi</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <FaBed className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400" />
                    <p>Comfortable Beds</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodOutline className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Delicious Dining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
