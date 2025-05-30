
"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

export default function CatalogDrawer() {
    const Catalogdata = [
        {
          image: "public/Menu bar/Catalog/menu-category-06.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/menu-category.avif",
          title: "Men",
          subtitles: ["Arm Warmers & Sleeves", "Balaclavas", "Bandanas & Headties", "Accessories", "Earmuffs"],
        },
        {
          image: "public/Menu bar/Catalog/menu-category-03.avif",
          title: "Teanagers",
          subtitles: ["Preppy Style", "Fitness Fashion", "Special Occasions", "Outdoor Clothing", "School Outfits"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        },
        {
          image: "public/Menu bar/Catalog/busines-industrial.avif",
          title: "Women",
          subtitles: ["Dresses", "Activewear", "One-Pieces", "Outerwear", "Pants"],
        }
      ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
        <button onClick={() => setIsOpen(true)} className="border-0 border-none  bg-transparent"> <div className="grid grid-cols-1 justify-items-center items-center">
            <img src="menu-svgrepo-com.svg" alt=""  className="w-5"/>
            <p className="text-xs">Catalog</p>
        </div></button>
      <Drawer open={isOpen} onClose={handleClose} position="left" className="w-full  z-50 p-0 md:rounded-r-xl md:w-9/12">
        <Drawer.Header titleIcon={() => <></>} title=""/>
        <div className="flex items-center justify-between flex-col">
            <h1 className="">Our Catalog <span className="text-sm font-normal p-2">hide previews</span></h1>
            <div className="flex flex-row gap-3 mt-5">
              <input type="search" name="" id="" className="border-0 outline-none border-b-2" placeholder="Filter By Category"/><img src="public\loupe-search-svgrepo-com.svg" alt="" className="w-6"/>
            </div>
          </div>
        <Drawer.Items>
         
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-5 w-full overflow-auto touch-pan-y h-96 mt-16">
            {Catalogdata.map((item, index) => (
              <div className="bg-white p-5 " key={index}>
                <div className="mb-2">
                  <img src={item.image} alt={item.title} className="w-full h-fit object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  {item.subtitles.map((subtitle, subIndex) => (
                    <p key={subIndex} className="text-sm text-gray-700">{subtitle}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
