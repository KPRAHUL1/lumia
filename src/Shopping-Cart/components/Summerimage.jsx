import React from "react";
import { Summercarts } from "./Summercarts"; // Assuming this is the correct component for rendering summer items
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Summerimage({ products }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="xl:px-40 lg:px-32 md:px-20 p-5 sm:px-10 border-hidden">
      <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]}>
        {products.map((product, index) => (
          <Summercarts
            key={index}
            image1={product.image1}
            image={product.image}
            title={product.title}
            description={product.description}
            money={product.money}
          />
        ))}
      </Carousel>
    </div>
  );
}
