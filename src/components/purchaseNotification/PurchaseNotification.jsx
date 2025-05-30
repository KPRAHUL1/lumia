import { useState, useEffect } from "react";
import NotificationCard from "../../components/notificationCard/notificationcard";


const PurchaseNotifications = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Notification logic
  useEffect(() => {
    if (products.length === 0 || !isLargeScreen) return;

    const showNotification = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 20000);
    };

    const firstTimeout = setTimeout(showNotification, 15000);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      showNotification();
    }, 40000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [products, isLargeScreen]);

  if (!visible || !isLargeScreen || products.length === 0) return null;

  return <NotificationCard product={products[currentIndex]} onClose={() => setVisible(false)} />;
};

export default PurchaseNotifications;
