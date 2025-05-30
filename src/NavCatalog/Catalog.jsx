"use client";

import {  Modal } from "flowbite-react";
import { useState } from "react";
import image from "../assets/products/cart2.1.webp"
export function Catalog() {
  const Catalogdata = [
    {
      image: image,
      title: "Women",
      subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
    },
    {
      image: image,
      title: "Men",
      subtitles: ["Arm Warmers & Sleeves", "Balaclavas", "Bandanas & Headties", "Accessories", "Earmuffs"],
    },
    {
      image: image,
      title: "Teenagers",
      subtitles: ["Preppy Style", "Fitness Fashion", "Special Occasions", "Outdoor Clothing", "School Outfits"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    },
    {
      image: image,
      title: "Business",
      subtitles: ["Business Attire", "Formal Wear", "Accessories", "Office Supplies"],
    }

  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Catalog</button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-black/60"
        size="5xl"
      >
        <Modal.Header className="border-none ">
          <div className="items-center hidden lg:grid lg:grid-cols-2 " >
           <div className="lg:grid lg:grid-cols-2 lg:gap-3"><h1 className="text-xl font-bold">Our Catalog <p className="text-xs font-normal">hide previews</p></h1></div> 
            <div className="flex items-center "> 
              <input 
                type="search" 
                className="px-2 py-1 border-0 border-b-2 outline-none" 
                placeholder="Filter By Category" 
              />
              <img 
                src="/loupe-search-svgrepo-com.svg" 
                alt="Search" 
                className="w-6 ml-2" 
              />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="w-full p-4">
          <div className="grid grid-cols-1 gap-5 overflow-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 touch-pan-y h-96">
            {Catalogdata.map((item, index) => (
              <div className="p-4 bg-white rounded-lg shadow-lg " key={index} >
                <div className="mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-48 rounded-md" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="mb-2 text-lg font-semibold">{item.title}</h2>
                  {item.subtitles.map((subtitle, subIndex) => (
                    <p key={subIndex} className="text-sm text-gray-700">{subtitle}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
