import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="gg grid grid-cols-1 gap-4 py-8 md:py-12">
        <div className="text-white">
          <p data-aos="fade-up" className="text-sm">
            Our Packages
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-3xl"
          >
            Search Your Destination
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-white/70 rounded-md p-4 relative"
          // Apply margin-top directly for small screens
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 py-3">
            <div>
              <label htmlFor="name" className="opacity-50 hidden md:block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="opacity-50 hidden md:block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Mobile Number"
                className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="opacity-50 hidden md:block">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your Address"
                className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 py-3">
            <div>
              <label htmlFor="checkin" className="opacity-50 ">
                Check-In
              </label>
              <input
                type="date"
               
                name="checkin"
                id="checkin"
                 placeholder="enter checkin date"
                className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
              />
            </div>
            <div>
              <label htmlFor="checkout" className="opacity-50 ">
                Check-Out
              </label>
              <input
                
                type="date"
                name="checkout"
                id="checkout"
                placeholder="enter checkout date"
                className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
              />
            </div>
            <div>
              <label htmlFor="guests" className="opacity-50 hidden md:block">
                Number of Guests
              </label>
              <input
                type="number"

                name="guests"
                id="guests"
                placeholder="enter the guest number"
                min="1"
                className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2 "
              />
            </div>
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
