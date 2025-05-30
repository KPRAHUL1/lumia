import React, { useState, useEffect } from "react";
import WinterProducts from "./winterProducts";
import SummerProducts from "./summerProducts";
import ToggleButton from "./ToggleButton";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("Winter");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched products:", data.products); // Log fetched products
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  
  const winterSeasonId = "c75a9583-e2f0-4697-bd05-1de1a2cdedec"; // Winter Season ID
  const summerSeasonId = "580d7581-1d45-420d-96d8-4503439d7925"; // Summer Season ID
  
  // Assuming `products` is an array of objects containing a `season` property
  const winterProducts = products.filter((product) => product.season === selectedSeason);
  const summerProducts = products.filter((product) => product.season === selectedSeason);
  
  console.log("Filtered Winter Products:", winterProducts);
  console.log("Filtered Summer Products:", summerProducts);
  


  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Stay in Trend</h2>
        <p className="text-gray-500 text-sm">Explore our latest collection</p>
      </div>

      {/* Season Toggle */}
      <ToggleButton selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />

    
      {selectedSeason === "Winter" ? (
        <WinterProducts products={winterProducts} />
      ) : (
        <SummerProducts products={summerProducts} />
      )}
    </section>
  );
};

export default ProductShowcase;
