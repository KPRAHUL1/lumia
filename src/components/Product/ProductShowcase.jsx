import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToggleButton from "./ToggleButton";
import ProductCard from "./ProductCard";

const ProductShowcase1 = () => {
  const [products, setProducts] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("Winter");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ API Response:", data); // Debug API response

        // Ensure `data` has `products` or fallback to an empty array
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("⚠️ Unexpected API response format:", data);
          setProducts([]); // Set empty array to avoid crashes
        }
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Runs only once when the component mounts

  // Filter products based on selected season
  const filteredProducts = products.filter((product) => {
    const seasonName = product.season?.name?.trim().toLowerCase();
    const selected = selectedSeason.trim().toLowerCase();

    console.log(`Comparing: ${seasonName} === ${selected}`);

    return seasonName === selected;
  });

  console.log("Fetched Products:", products);
  console.log("Selected Season:", selectedSeason);
  console.log("Filtered Products:", filteredProducts);

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
    <motion.section
      className="py-10 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Stay in Trend</h2>
        <p className="text-gray-500 text-sm">Explore our latest collection</p>
      </div>

      {/* Season Toggle */}
      <ToggleButton selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />

      <div className="px-10 mt-8">
        {filteredProducts.length > 0 ? (
          <Slider {...settings}>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="px-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <ProductCard
                  id={product.id}
                  images={Array.isArray(product.imageUrls) ? product.imageUrls : [product.imageUrls] || []} // Ensure images is always an array
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  colors={product.colors || []}
                  materials={product.materials || []}
                  sizes={product.sizes || []}
                  subscription={product.subscription || false}
                />


              </motion.div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No products found for this season.</p>
        )}
      </div>
    </motion.section>
  );
};

export default ProductShowcase1;
