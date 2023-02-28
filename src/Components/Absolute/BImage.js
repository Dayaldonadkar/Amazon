import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BImage = () => {
  return (
    <Carousel
      interval={2000}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div>
        <img src="Banner1.jpg" />
      </div>
      <div>
        <img src="Banner2.jpg" />
      </div>
      <div>
        <img src="Banner3.jpg" />
      </div>
      <div>
        <img src="Banner4.jpg.jpg" />
      </div>
      <div>
        <img src="Banner5.jpg" />
      </div>
    </Carousel>
  );
};

export default BImage;
