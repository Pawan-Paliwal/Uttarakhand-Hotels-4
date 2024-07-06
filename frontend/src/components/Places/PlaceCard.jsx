import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <div
      className="group relative shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg overflow-hidden"
      onClick={handleOrderPopup}
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt="Hotel"
          className="mx-auto h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 p-3 text-white">
          <h1 className="line-clamp-1 font-bold text-lg">{title}</h1>
          <div className="flex items-center gap-2 opacity-90 text-sm">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 p-3 bg-white dark:bg-slate-950">
        <p>{type}</p>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
          <div className="opacity-70">
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-gradient-to-r hover:from-secondary hover:to-primary px-4 py-2 rounded-full transition-all duration-300">
              Buy Now
            </button>
          </div>
          <div>
            <p className="text-2xl font-bold">₹{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
