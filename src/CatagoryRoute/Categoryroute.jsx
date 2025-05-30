import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BottomNav2 from "../Bottomnav2/BottomNav";
import ProductCard from "../components/Product/ProductCard";
import CategorySection from "../ShoppingRoute/categorysection";

export default function CategoryRoute() {
  const { categoryName } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const formattedCategory = categoryName.toLowerCase(); // Normalize category name
        const apiUrl = `http://localhost:5000/api/product?category=${formattedCategory}`;
        console.log("Fetching from API with URL:", apiUrl);
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
  
        // Filter products by category name (based on the API response)
        const filteredProducts = response.data.filter(
          (product) => product.category.name.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        const message =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : "An unexpected error occurred.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, [categoryName]); // Fetch products when category changes

  return (
    <>
      <nav className="px-4 py-4 bg-gray-50">
          <p>
            <Link className="text-blue-600" to="/">Home</Link> {">"} <span>{categoryName}</span>
          </p>
      </nav>

      {/* Pass categoryName to CategorySection */}
      <CategorySection categoryName={categoryName} />

      <section className="min-h-screen bg-gray-50">
        {loading ? (
          <div className="py-4 text-center">Loading...</div>
        ) : error ? (
          <div className="py-4 text-center text-red-600">{error}</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-3 xl:grid-cols-4 lg:mx-40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
           
          >
            {products.map((product) => (
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
          </motion.div>
        )}
      </section>

      <BottomNav2 />
    </>
  );
}
