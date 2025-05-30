import winterJacket from "../../assets/products/cart2.1.webp";
import yellowPuffer from "../../assets/products/cart2.1.webp";
import silverJacket from "../../assets/products/cart2.1.webp";
import blueSweater from "../../assets/products/cart2.1.webp";
import summerShirt from "../../assets/products/cart2.1.webp";
import casualTShirt from "../../assets/products/cart2.1.webp";

const products = {
  winter: [
    {
      id: 1,
      image: winterJacket,
      label: "NEW",
      title: "Padded Winter Jacket",
      subscription: true,
      colors: ["#002366", "#654321", "#008080", "#000000"], // Dark Blue, Brown, Teal, Black
      materials: ["Wool", "Cotton", "Polyester"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 36,
    },
    {
      id: 2,
      image: yellowPuffer,
      label: "NEW",
      title: "Yellow Puffer",
      subscription: false,
      colors: ["#FFD700", "#000000"], // Gold, Black
      materials: ["Polyester", "Nylon"],
      sizes: ["S", "M", "L"],
      price: 50,
    },
    {
      id: 3,
      image: silverJacket,
      label: "NEW",
      title: "Silver Jacket",
      subscription: true,
      colors: ["#C0C0C0", "#000000"], // Silver, Black
      materials: ["Wool", "Synthetic"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 41,
    },
    {
      id: 4,
      image: blueSweater,
      label: "NEW",
      title: "Blue Sweater",
      subscription: false,
      colors: ["#1E90FF", "#FFFFFF"], // Dodger Blue, White
      materials: ["Cotton", "Wool"],
      sizes: ["S", "M", "L"],
      price: 25,
    },
  ],
  summer: [
    {
      id: 5,
      image: summerShirt,
      label: "NEW",
      title: "Summer Shirt",
      subscription: false,
      colors: ["#FFA500", "#FFFFFF"], // Orange, White
      materials: ["Cotton", "Linen"],
      sizes: ["M", "L", "XL"],
      price: 20,
    },
    {
      id: 6,
      image: casualTShirt,
      label: "NEW",
      title: "Casual T-Shirt",
      subscription: false,
      colors: ["#000000", "#FFFFFF", "#FF0000"], // Black, White, Red
      materials: ["Cotton", "Polyester"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 15,
    },
  ],
};

export default products;
