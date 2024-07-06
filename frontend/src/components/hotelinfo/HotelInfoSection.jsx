import React from "react";
import img2 from "../../assets/2.jpg"

const HotelInfoSection = ({ hotels, amenityIcons }) => {
  return (
    <div className="relative h-screen w-full hidden lg:block"> {/* Hidden on mobile screens, shown on tablets and larger */}
      {/* Background Image */}
      <img
        src={img2}// Ensure this path is correct
        alt="Hotel Background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      {/* Hotel Cards Container */}
      <div className="absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row justify-around items-center bg-black bg-opacity-40 p-4">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-70 text-center p-4 m-2 rounded-md w-full lg:w-1/3 shadow-lg"
            style={{ maxWidth: "300px"}} // Adjust max-width as needed
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            {/* Hotel Name */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{hotel.name}</h2>

            {/* Hotel Description */}
            <p className="text-sm text-gray-600">{hotel.description}</p>

            {/* List of Services */}
            <ul className="list-disc list-inside mt-3 text-left">
              {hotel.services.map((service, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  {/* Service Icon */}
                  <span className="mr-2 text-blue-500">{amenityIcons[service]}</span>
                  {/* Service Name */}
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelInfoSection;
