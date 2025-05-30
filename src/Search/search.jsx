"use client";

import {  Modal } from "flowbite-react";
import { useState } from "react";
import search from '../assets/icons//magnifying-glass.png'

export function Searchsection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <img src={search} alt="" className="w-5" />
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className=" bg-black/60 z-50"> 
      <button onClick={() => setOpenModal(false)} className="flex justify-end mt-5 mr-5">
          <img src="cross-svgrepo-com.svg" alt="" className="w-8" />
      </button>
      <div className="overflow-auto touch-pan-y h-96">
          <div className="text-center ">
      <h1 className="font-semibold text-2xl"> Search in store</h1> 
      <p className="text-sm ">Advanced search will help you quickly find a product</p>
          </div> 
        <Modal.Body className="bg-white text-gray-800">
          <div>
            <div className=" border-b-2  flex justify-between mx-10">
             <input type="search" placeholder="Search by title, sku, type, vendor, description or tags" className="  border-0 outline-none w-10/12 "/>
              <img src="loupe-search-svgrepo-com.svg" alt="" className="w-5" />
            </div>
          </div>
          <div className="mt-10 text-center space-y-10 ">
           <h1 className="text-xl font-bold ">Most searched for today</h1>
          
          </div>
          
        </Modal.Body>
        </div>
        <Modal.Footer className="border-none border-0 ">   
        </Modal.Footer>
      </Modal>
    </>
  );
}
