import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Dropdown } from "flowbite-react";

export default function ShoppingRoute() {
    const { productId } = useParams();  // Get product ID from URL parameters
    const [product, setProduct] = useState(null);  // Initialize product state

    // Fetch product details using the productId from the URL
    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/product/${productId}`);
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
      
            const data = await response.json();
            console.log("Fetched Data:", data);
      
            // ✅ Ensure we extract the first item from the array
            if (data && typeof data === "object") {
                setProduct(data); // ✅ Directly set the product object
              } else {
                console.warn("Empty or invalid data received:", data);
                setProduct(null);
              }
              
          } catch (error) {
            console.error("Error fetching product details:", error);
            setProduct(null);
          }
        };
      
        fetchProductDetails();
      }, [productId]);
      
    
    

    if (!product) return <p>Loading product details...</p>;  // Show loading message if product is not yet fetched

    return (
        <section>
         
            
            <div className="grid lg:grid lg:grid-cols-2 lg:mx-40 lg:mt-40">
                <div className="space-y-">
                    <div>
                        {/* Displaying first product image */}
                        <img 
                            src={product.imageUrls && Array.isArray(product.imageUrls) ? `http://localhost:5000/${product.imageUrls[0]}` : 'default_image.jpg'} 
                            alt={product.name || 'Product'} 
                            className="w-full h-full rounded-xl" 
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-center text-center">
                            <hr />
                            <h1 className="text-xl font-semibold">Guaranteed Safe Checkout</h1>
                            <hr />
                        </div>
                        <div className="grid grid-cols-1 p-5 space-y-4 text-center xl:flex xl:justify-evenly">
                            <div className="flex flex-col text-white xl:pt-5">
                                <div className="flex justify-center space-x-3 text-black">
                                    <i className="text-4xl fa-brands fa-instagram"></i>
                                    <i className="text-3xl fa-brands fa-facebook"></i>
                                    <i className="text-3xl fa-brands fa-tiktok"></i>
                                    <i className="text-3xl fa-brands fa-x-twitter"></i>
                                    <i className="text-3xl fa-brands fa-youtube"></i>
                                </div>
                                <div className="flex justify-center space-x-3">
                                    <img src="visa.png" alt="" className="w-10 h-6" />
                                    <img src="paypal.png" alt="" className="w-10 h-6" />
                                    <img src="mastercard.png" alt="" className="w-10 h-6" />
                                    <img src="google-pay.webp" alt="" className="w-10 h-6" />
                                    <img src="american-express.png" alt="" className="w-10 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 p-5 overflow-auto touch-pan-y">
                    {/* Product reviews and availability */}
                    <div className="flex flex-row gap-2">
                        <div>
                            {Array(5).fill().map((_, index) => (
                                <i key={index} className="fa-regular fa-star"></i>
                            ))}
                        </div>
                        <Link to="#" className="text-blue-500">2 reviews</Link>
                    </div>
                    <div className="flex gap-2 text-sm font-semibold">
                        <h1>Availability :</h1>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => (
                            <span className="text-green-400">
                                Hurry Only left <span className="font-semibold text-black">{product.colors[0]} / {product.sizes[0]} in stock!</span>
                            </span>
                        )}></Dropdown>
                    </div>

                    {/* Product details */}
                    <div className="flex flex-col">
                        <h1 className="pb-3 text-2xl font-bold">{product.name}</h1>
                        <h1 className="text-2xl font-semibold">${product.price}</h1>
                        <p className="text-sm">Tax included</p>
                    </div>

                    {/* Product description and attributes */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Short description :</h1>
                        <p className="font-thin">{product.description}</p>

                        <h1 className="font-semibold">Product Type: <span className="font-light">{product.type}</span></h1>
                        <h1 className="font-semibold">SKU: <span className="font-light">{product.sku}</span></h1>
                        <h1 className="font-semibold">Tags: <span className="font-light">{product.tags}</span></h1>
                        <h1 className="font-semibold">Weight: <span className="font-light">{product.weight} kg</span></h1>
                        <h1 className="font-semibold">Vendor: <span className="font-light">{product.vendor}</span></h1>
                    </div>

                    {/* Product color and size options */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold">Color: </h1>
                        <div className="flex flex-row flex-wrap items-center gap-4 md:flex">
                            {product.colors.map((color, index) => (
                                <div key={index} className="w-16 h-16 border rounded-lg shadow-xl" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart and other options */}
                    <div className="flex flex-col gap-5">
                        <label htmlFor="">
                            <div className="border-b">
                                <textarea name="" placeholder="Order special instruction" id="" className="w-full pt-2 border-none outline-none focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="" id="" />
                                    <h1>One-time purchase</h1>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="" id="" />
                                    <h1>Subscribe & save</h1>
                                </div>
                            </div>
                        </label>
                        <div className="flex gap-3">
                            <button className="p-3 px-5 font-semibold text-white bg-blue-600 border rounded-full">ADD TO CART</button>
                            <button className="p-3 px-5 bg-yellow-300 border rounded-full">BUY IT NOW</button>
                            <img src="public/heart-like-svgrepo-com.svg" alt="" className="w-7" />
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="" id="" />
                            <a href="">Agree to the store policies</a>
                        </div>
                    </div>

                    {/* Pickup and shipping details */}
                    <div className="flex flex-col gap-3">
                        <p className="text-sm">Pickup available at Neuer Weg 94, 12th Floor, 45711 Datteln, Germany. Usually ready in 24 hours</p>
                        <Link to="#" className="text-xs text-blue-500">Check availability at other stores</Link>
                        <div className="grid items-center justify-center grid-cols-2 gap-3 md:grid md:grid-cols-4">
                            <div className="flex flex-col items-center justify-center gap-2 p-3 border border-black border-dashed rounded-xl">
                                <img src="public/delivery-truck-svgrepo-com.svg" alt="" className="w-7" />
                                <h3 className="flex text-sm font-semibold">FREE SHIPPING</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 p-3 border border-black border-dashed rounded-xl">
                                <img src="public/svg-icons/return-svgrepo-com.svg" alt="" className="w-7" />
                                <h3 className="flex text-sm font-semibold">FREE RETURNS</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 p-3 border border-black border-dashed rounded-xl">
                                <img src="public/operator-svgrepo-com.svg" alt="" className="w-7" />
                                <h3 className="flex text-sm font-semibold">SUPPORT 24/7</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
