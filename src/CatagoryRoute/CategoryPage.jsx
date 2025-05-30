// import { useState, useEffect } from "react";

// const CategoryPage = ({ categoryId }) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!categoryId) {
//         setError("categoryId is required");
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:5000/api/products/category?categoryId=${categoryId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError("Failed to fetch products. Please try again later.");
//       }
//     };

//     fetchProducts();
//   }, [categoryId]); // Make sure categoryId is in the dependency array

//   return (
//     <div>
//       <h1>Products in this Category</h1>
//       {error && <p>{error}</p>}
//       <div>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id}>
//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <img src={`http://localhost:5000/${product.imageUrls[0]}`} alt={product.name} />
//               <p>Price: ${product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
