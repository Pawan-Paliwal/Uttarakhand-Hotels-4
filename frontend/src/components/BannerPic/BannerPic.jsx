import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Banner2 from '../../assets/2.jpg';
import Banner3 from '../../assets/3.jpg';
import Banner4 from '../../assets/4.jpg';

const ImageCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      <div>
        <img src={Banner2} alt="Banner 2" />
      </div>
      <div>
        <img src={Banner3} alt="Banner 3" />
      </div>
      <div>
        <img src={Banner4} alt="Banner 4" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
