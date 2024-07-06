import React from "react";
import BlogCard from "./BlogCard";
import Place1Img from "../../assets/place1.jpg";
import Place2Img from "../../assets/place2.jpg";
import Place3Img from "../../assets/place3.jpg";
import Place4Img from "../../assets/place4.jpg";
import Place5Img from "../../assets/place5.jpg";
import Place6Img from "../../assets/place6.jpg";
import Place7Img from "../../assets/place7.jpg";
import Place8Img from "../../assets/place8.jpg";
import Place9Img from "../../assets/place9.jpg";

const PlacesData = [
  {
    id: 1,
    image: Place1Img,
    title: "Har Ki Pauri",
    location: "Haridwar",
    description:
      "Har Ki Pauri is a famous ghat on the banks of the Ganges in Haridwar. It is considered one of the most sacred ghats in India.",
  },
  {
    id: 2,
    image: Place2Img,
    title: "Chandi Devi Temple",
    location: "Haridwar",
    description:
      "Chandi Devi Temple is dedicated to Goddess Chandi, situated on Neel Parvat on the eastern summit of the Sivalik Hills.",
  },
  {
    id: 3,
    image: Place3Img,
    title: "Mansa Devi Temple",
    location: "Haridwar",
    description:
      "Mansa Devi Temple is a Hindu temple dedicated to Goddess Mansa Devi, located at the Bilwa Parvat on the Sivalik Hills.",
  },
  {
    id: 4,
    image: Place4Img,
    title: "Bharat Mata Mandir",
    location: "Haridwar",
    description:
      "Bharat Mata Mandir is a multi-storey temple dedicated to Bharat Mata, showcasing a relief map of undivided India carved out of marble.",
  },
  {
    id: 5,
    image: Place5Img,
    title: "Rajaji National Park",
    location: "Haridwar",
    description:
      "Rajaji National Park is an Indian national park and tiger reserve that encompasses the Shivaliks, near the foothills of the Himalayas.",
  },
  {
    id: 6,
    image: Place6Img,
    title: "Mussoorie",
    location: "Near Haridwar",
    description:
      "Mussoorie is a hill station known for its scenic beauty, colonial charm, and adventure activities. It is often referred to as the 'Queen of Hills'.",
  },
  {
    id: 7,
    image: Place9Img,
    title: "Dehradun",
    location: "Near Haridwar",
    description:
      "Dehradun is the capital city of Uttarakhand, known for its picturesque landscapes, pleasant climate, and educational institutions.",
  },
  {
    id: 8,
    image: Place7Img,
    title: "Rishikesh",
    location: "Near Haridwar",
    description:
      "Rishikesh is a spiritual town situated on the banks of the Ganges River, known for its yoga and meditation centers, and adventure sports.",
  },
  {
    id: 9,
    image: Place8Img,
    title: "Neelkanth Mahadev Temple",
    location: "Near Haridwar",
    description:
      "Neelkanth Mahadev Temple is a sacred Hindu temple dedicated to Lord Shiva, located amidst the lush greenery of the Garhwal Himalayas.",
  },
];


const BlogsComp = () => {
  return (
    <>
     <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit in Haridwar
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {PlacesData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
