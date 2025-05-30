import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carosalshoe from "./CarosalShoe";

export default function Shoecarosal() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="mt-10 overflow-hidden xl:px-20">
      <Slider {...settings}>
        {products
          .filter((product) => product.categoryId === "fd35a4d0-f1e4-4b4d-99b9-3cd970ce16d1") // Filter Sneakers Category
          .map((product) => (
            <div key={product._id} className="px-2">
              <Carosalshoe
                id={product.id}
                 images={Array.isArray(product.imageUrls) ? product.imageUrls : [product.imageUrls] || []}
                title={product.name}
                description={product.description}
                money={`$${product.price}`}
                subtitle="High-quality sneakers for your style"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
