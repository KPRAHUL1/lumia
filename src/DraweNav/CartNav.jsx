
"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
        <button onClick={() => setIsOpen(true)} className="border-0 border-none  bg-transparent"> <div className="grid grid-cols-1 justify-items-center items-center">
            <img src="shopping-bag-svgrepo-com.svg" alt=""  className="w-5"/>
            <p className="text-xs">Cart</p>
        </div></button>
      <Drawer open={isOpen} onClose={handleClose} position="left" className="w-full  z-50 p-0 md:rounded-r-xl md:w-9/12">
        <Drawer.Header titleIcon={() => <></>} title=""/>
        <Drawer.Items>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
