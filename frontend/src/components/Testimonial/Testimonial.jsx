import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "John Smith",
    text: "Beautiful rooms with amazing views! The staff was courteous and the service impeccable.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Emily Brown",
    text: "Had a wonderful stay! The room was clean and comfortable, and the location was perfect.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "David Johnson",
    text: "Absolutely loved the ambiance and hospitality. Highly recommend this hotel!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Sarah Clark",
    text: "Great experience overall. The rooms were spacious and well-maintained.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Michael White",
    text: "Friendly staff, delicious food, and comfortable rooms. Will definitely visit again!",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonials
            </p>
            <h1 className="text-3xl font-bold">Guest Reviews</h1>
            <p className="text-xs text-gray-400">
              {" "}
              See what our guests have to say about their stay with us in Haridwar.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1200px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt={name}
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
