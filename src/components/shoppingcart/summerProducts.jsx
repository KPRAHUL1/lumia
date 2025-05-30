import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/Product/ProductCard";

const SummerProducts = ({ products }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="px-10 mt-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard
              id={product.id}
              images={product.images || []}
              title={product.name}
              description={product.description}
              price={product.price}
              colors={product.colors || []}
              materials={product.materials || []}
              sizes={product.sizes || []}
              subscription={product.subscription || false}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SummerProducts;
