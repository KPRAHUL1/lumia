"use client";

import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function Wintercarts(props) {
  const { image, image1, title, description, money } = props;
  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  return (
    <Card
      className="relative md:m-3 lg:m-5 w-fit bg-white shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {/* Image Section */}
      <div className="relative">
        <Link to="/Shop">
          <img
            src={hovered ? image1 : image}
            alt=""
            className="  h-72 object-cover rounded-t-lg"
          />
        </Link>
        <div className="p-4 flex flex-col items-center justify-center">
        {/* Title */}
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        {/* Rating */}
        <div className="flex items-center my-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {/* Description */}
        <span className="font-semibold text-gray-700">{description}</span>
        {/* Price and Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {money}
          </span>
        </div>
      </div>
        {/* Hover Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0  bg-white overflow-hidden w-full h-0 transition-all duration-500 ease-in-out ${
            hovered ? "h-3/5 rounded-t-xl" : "h-0"
          }`}
        >
           <div className="p-4 flex items-center justify-center flex-col">
        {/* Title */}
        <a href="#">
          <h5 className="text-md   tracking-tight text-gray-500 dark:text-white">
            {title}
          </h5>
        </a>
       
        {/* Description */}
        <span className="font-semibold text-gray-700">{description}</span>
        {/* Price and Button */}
        <div className="flex flex-col  gap-3 items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {money}
          </span>
          <button
            className="rounded-full px-5 py-2.5 text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div> 
          
        </div>
      </div>

      {/* Content Section */}
      
    </Card>
  );
}
