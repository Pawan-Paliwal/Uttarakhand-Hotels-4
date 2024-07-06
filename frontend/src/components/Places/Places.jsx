import React from "react";
import PlaceCard from "./PlaceCard";
import HotelImg1 from "../../assets/i1.jpeg";
import HotelImg2 from "../../assets/i2.jpeg";
import HotelImg3 from "../../assets/i3.jpg";
import HotelImg4 from "../../assets/i6.jpg";
import HotelImg5 from "../../assets/hotel5.jpg";
import HotelImg6 from "../../assets/hotel6.jpg";

const HotelsData = [
  {
    img: HotelImg1,
    title: "Hotel Suvidha Deluxe",
    location: "Haridwar",
    description: "Enjoy a deluxe stay at Hotel Suvidha Deluxe with all modern amenities for a comfortable experience.",
    price: 5000,
    type: "Deluxe Room",
  },
  {
    img: HotelImg3,
    title: "Hotel Le Grace",
    location: "Haridwar",
    description: "Hotel Le Grace offers a deluxe stay with beautifully designed rooms and excellent service.",
    price: 5500,
    type: "Deluxe Room",
  },
  {
    img: HotelImg6,
    title: "Hotel King Plaza",
    location: "Haridwar",
    description: "Luxury rooms at Hotel King Plaza offer a perfect blend of comfort and elegance.",
    price: 8200,
    type: "Luxury Room",
  },
  {
    img: HotelImg2,
    title: "Hotel Suvidha Deluxe",
    location: "Haridwar",
    description: "Experience luxury in the heart of Haridwar at Hotel Suvidha Deluxe with premium services and facilities.",
    price: 8000,
    type: "Luxury Room",
  },
 
  {
    img: HotelImg4,
    title: "Hotel Le Grace",
    location: "Haridwar",
    description: "Stay in luxury at Hotel Le Grace, featuring top-notch amenities and exquisite hospitality.",
    price: 8500,
    type: "Super Deluxe Room",
  },
  {
    img: HotelImg5,
    title: "Hotel King Plaza",
    location: "Haridwar",
    description: "Enjoy your stay at Hotel King Plaza with comfortable deluxe rooms and great services.",
    price: 5200,
    type: "Deluxe Room",
  },
 
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Hotels in Haridwar
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {HotelsData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
