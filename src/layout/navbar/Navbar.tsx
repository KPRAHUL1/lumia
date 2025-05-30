import React, { useState, useEffect } from "react";

import { FiFilter, FiMessageSquare, FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

export const Navbar = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  const navClasses = `fixed top-0 left-0 w-full flex justify-evenly items-center shadow-md bg-white transition-transform duration-300 ease-out ${visible ? 'translate-y-0' : '-translate-y-full'}`;

  return (
    <nav className={navClasses}>
      {/* Logo */}
      <div className="px-8 py-4">
        <img src="logo.svg" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="lg:flex lg:gap-5 font-normal text-md xl:gap-8 text-gray-700 hidden ">
        <li className="relative hover:text-blue-600 cursor-pointer" >
          Home
          <div className="absolute left-0 right-0 h-0.5 bg-blue-600 mt-1"></div>
        </li>
        <li className="relative hover:text-blue-600 cursor-pointer">
          Settings
          {/* <span className="ml-1 text-xs bg-gray-800 text-white px-1.5 py-0.5 rounded">New</span> */}
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Pages</li>
        <li className="relative hover:text-blue-600 cursor-pointer">
          Catalog
          {/* <span className="ml-1 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">Sitemap</span> */}
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Women</li>
        <li className="hover:text-blue-600 cursor-pointer">Men</li>
        <li className="relative hover:text-blue-600 cursor-pointer">
          Buy Lumia
          {/* <span className="ml-1 text-xs bg-pink-500 text-white px-1.5 py-0.5 rounded">-70%</span> */}
        </li>
      </ul>

      {/* Icons */}
      <div className="lg:flex hidden items-center gap-4">
        <FiSearch className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
        <FiHeart className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
        <FiShoppingBag className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
        <FiUser className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
        <FiMessageSquare className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
        <FiFilter className="text-gray-700 hover:text-blue-600 cursor-pointer" size={24} />
      </div>
    </nav>
  );
}; 