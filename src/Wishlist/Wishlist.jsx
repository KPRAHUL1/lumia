
"use client";

import { Drawer } from "flowbite-react";
import { useState } from "react";
import heart from "../assets/icons/heart.png"
export default function Wishlist() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
        <button onClick={() => setIsOpen(true)} className="bg-transparent border-0 border-none"><img src={heart} alt="" className="w-5"/></button>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="w-5/12 rounded-l-xl">
        <Drawer.Header titleIcon={() => <></>} title=""/>
        <Drawer.Items>
         
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
